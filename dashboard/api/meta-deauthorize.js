/**
 * Desautorização — a Meta envia POST com signed_request quando o utilizador remove a app.
 * URL: /meta/deauthorize (rewrite) ou /api/meta-deauthorize
 *
 * Opcional: META_APP_SECRET (ou INSTAGRAM_APP_SECRET) para validar a assinatura.
 */
import { createHmac, timingSafeEqual } from "node:crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).send("Method Not Allowed");
    return;
  }

  let signedRequest = getSignedRequest(req);
  if (!signedRequest) {
    const raw = await readBody(req);
    signedRequest = parseFormSignedRequest(raw);
  }
  const secret = process.env.META_APP_SECRET || process.env.INSTAGRAM_APP_SECRET;

  if (signedRequest && secret) {
    try {
      const data = parseSignedRequest(signedRequest, secret);
      console.log("[meta-deauthorize] user_id", data.user_id);
    } catch (e) {
      console.warn("[meta-deauthorize] assinatura inválida ou parse falhou", e?.message);
      res.status(400).send("Bad Request");
      return;
    }
  } else if (signedRequest) {
    console.log("[meta-deauthorize] signed_request recebido (META_APP_SECRET não definido — validação ignorada)");
  }

  res.status(200).setHeader("Content-Type", "text/plain; charset=utf-8").send("OK");
}

function getSignedRequest(req) {
  if (req.body && typeof req.body === "object" && req.body.signed_request) {
    return String(req.body.signed_request);
  }
  if (typeof req.body === "string" && req.body.includes("signed_request=")) {
    try {
      const params = new URLSearchParams(req.body);
      return params.get("signed_request") || "";
    } catch {
      return "";
    }
  }
  return "";
}

function parseFormSignedRequest(raw) {
  if (!raw || typeof raw !== "string") return "";
  try {
    return new URLSearchParams(raw).get("signed_request") || "";
  } catch {
    return "";
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function parseSignedRequest(signedRequest, secret) {
  const parts = signedRequest.split(".");
  if (parts.length !== 2) throw new Error("invalid format");
  const [encodedSig, payload] = parts;
  const sig = Buffer.from(encodedSig.replace(/-/g, "+").replace(/_/g, "/"), "base64");
  const expected = createHmac("sha256", secret).update(payload).digest();
  if (sig.length !== expected.length || !timingSafeEqual(sig, expected)) {
    throw new Error("bad signature");
  }
  const json = Buffer.from(payload.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");
  return JSON.parse(json);
}
