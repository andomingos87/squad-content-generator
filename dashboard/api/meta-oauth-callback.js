/**
 * Callback OAuth (Facebook / Instagram Business Login).
 * URL a registar no passo 4 da Meta e em Login do Facebook para Empresas → URIs de redirecionamento OAuth válidos.
 */
export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).send("Method Not Allowed");
    return;
  }

  const qs = req.url?.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Meta — callback</title>
</head>
<body style="font-family:system-ui,sans-serif;padding:2rem;max-width:40rem">
  <h1>Callback configurado</h1>
  <p>Se a Meta redirecionou aqui com <code>code</code> na URL, o fluxo de login foi concluído.</p>
  <p><strong>Query string:</strong> <code>${escapeHtml(qs || "(nenhuma)")}</code></p>
  <p style="color:#666;font-size:0.9rem">Pode fechar esta página. Para publicar carrosséis via script, continue usando o token no <code>.env</code>.</p>
</body>
</html>`;

  res.status(200).setHeader("Content-Type", "text/html; charset=utf-8").send(html);
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
