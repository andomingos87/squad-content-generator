/**
 * Página pública para pedido de exclusão de dados (requisito Meta / GDPR).
 * URL: /meta/data-deletion (rewrite) ou /api/meta-data-deletion
 */
export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).send("Method Not Allowed");
    return;
  }

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Exclusão de dados — App</title>
</head>
<body style="font-family:system-ui,sans-serif;padding:2rem;max-width:40rem;line-height:1.5">
  <h1>Exclusão de dados</h1>
  <p>Para remover os dados associados a esta aplicação nas contas Facebook/Instagram ligadas:</p>
  <ol>
    <li>Abra as <strong>definições da conta Facebook</strong> → <strong>Apps e sites</strong> (ou Empresas ligadas).</li>
    <li>Remova o acesso desta app ou desligue a página/conta Instagram Business.</li>
  </ol>
  <p>Se precisar de confirmar exclusão do nosso lado (ex.: dados guardados localmente), contacte o responsável pelo projeto com o ID da página ou conta.</p>
</body>
</html>`;

  res.status(200).setHeader("Content-Type", "text/html; charset=utf-8").send(html);
}
