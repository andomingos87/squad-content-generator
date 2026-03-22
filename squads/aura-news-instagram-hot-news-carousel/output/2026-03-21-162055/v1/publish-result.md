PUBLISH RESULT
Run: 2026-03-21-162055

---

## Validation

- Imagens: 8x JPEG em `v1/images/slide-01.jpg` … `slide-08.jpg` (OK para carrossel 2–10).
- Legenda: extraida de `v1/carousel-copy.md` (CAPTION + HASHTAGS), abaixo.

## Dry-run

- **Estado:** **OK** (2026-03-22)
- Script: `skills/instagram-publisher/scripts/publish.js` com `--dry-run`.
- Upload: **Litterbox** (`litter.catbox.moe`) — URLs com `Content-Length` correto no HEAD (Instagram rejeitava `files.catbox.moe` com erro 9004).
- **Carousel container ID** (nao publicado): `18063900530355076`

## Live publish

- **Estado:** **concluido** (2026-03-22)
- Comando: `publish.js` **sem** `--dry-run`.

## Post URL

- https://www.instagram.com/p/DWMOiwflVVy/

## Post ID

- `18057611600438086`

## Timestamp

- 2026-03-21T (registo local ao gerar este ficheiro)

---

## Legenda preparada (copiar para `--caption`)

```
OpenAI colocou no radar um esforco intenso em pesquisa autonoma: menos "resposta rapida" e mais fluxo que lembra trabalho de analise.

O ponto nao e futuro de filme. E custo, qualidade e responsabilidade quando a maquina soma etapas sozinha.

Quer acompanhar IA com sobriedade? Segue @auranews.ai

Qual risco voce acha que as pessoas subestimam: erro em cadeia ou excesso de confianca?

#inteligenciaartificial #tecnologia #openai #inovacao #futurodotrabalho #auranews #noticias
```

---

## Como publicar depois de configurar o .env

1. Na raiz do repo, copie `.env.example` para `.env` e preencha `INSTAGRAM_ACCESS_TOKEN` e `INSTAGRAM_USER_ID` (passo a passo em `skills/instagram-publisher/SKILL.md`).
2. Legenda multilinha ja esta em `v1/caption-instagram.txt`.
3. PowerShell (a partir da raiz do projeto):

```powershell
Set-Location "c:\Users\asdom\OneDrive\Documentos\Projetos\aura-ai2"
$base = "squads\aura-news-instagram-hot-news-carousel\output\2026-03-21-162055\v1\images"
$imgs = (1..8 | ForEach-Object { "$base\slide-{0:D2}.jpg" -f $_ }) -join ","
$cap = Get-Content -Raw "squads\aura-news-instagram-hot-news-carousel\output\2026-03-21-162055\v1\caption-instagram.txt"
node --env-file=.env skills/instagram-publisher/scripts/publish.js --images $imgs --caption $cap
```

Opcional: acrescente `--dry-run` ao final do `node ...` para testar sem publicar.

---

## Teste seguro (recomendado primeiro)

Com `.env` preenchido, use `--dry-run` para validar upload e containers sem publicar:

```powershell
node --env-file=.env skills/instagram-publisher/scripts/publish.js --images "<paths>" --caption "<texto>" --dry-run
```
