/**
 * Meta (Facebook/Instagram) webhook — verificação GET + receção POST.
 * Vercel: ficheiro em /api → URL /api/meta-webhook; vercel.json reescreve /meta-webhook → aqui.
 *
 * Env (Vercel / .env local com vercel dev):
 *   META_WEBHOOK_VERIFY_TOKEN — mesmo valor que "Verificar token" no painel Meta
 */
export default function handler(req, res) {
  const verifyToken = process.env.META_WEBHOOK_VERIFY_TOKEN;

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (!verifyToken) {
      res.status(503).send("META_WEBHOOK_VERIFY_TOKEN not configured");
      return;
    }

    if (mode === "subscribe" && token === verifyToken && challenge) {
      res.status(200).setHeader("Content-Type", "text/plain; charset=utf-8").send(String(challenge));
      return;
    }

    res.status(403).send("Forbidden");
    return;
  }

  if (req.method === "POST") {
    // Eventos em tempo real (comentários, mensagens, etc.). Responder rápido 200.
    // Opcional: validar X-Hub-Signature-256 com APP_SECRET (recomendado em produção).
    if (req.body && typeof req.body === "object") {
      console.log("[meta-webhook] POST", JSON.stringify(req.body).slice(0, 500));
    }
    res.status(200).json({ ok: true });
    return;
  }

  res.setHeader("Allow", "GET, POST");
  res.status(405).send("Method Not Allowed");
}
