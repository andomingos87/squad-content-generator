# Squad Memories

- Created on 2026-03-21.
- Goal: hot-news to Instagram carousel with automatic publish guardrails.

## Run 2026-03-21-155216

- Steps 1-2 concluidos: `news-brief.md` e `angle-brief.md` na pasta `output/2026-03-21-155216/v1/`.
- Checkpoint 3: usuario escolheu tema A, tom B (jornalistico), CTA B com **@auranews.ai**.
- Steps 4-8 concluidos: `carousel-copy.md`, `review-report.md`, `checkpoint-design.md`, `carousel-assets.md`, `checkpoint-publish.md`.
- Step 9: `publish-result.md` — JPEGs gerados em `v1/images/` (8 slides); publicacao API ainda pendente (`.env` + confirmacao).
- Preferencia visual registrada: editorial minimalista (paleta em `carousel-assets.md`).

## Run 2026-03-21-162055

- Pipeline Opensquad: steps 1-2 com brief novo (`v1/news-brief.md`, `v1/angle-brief.md`); checkpoint 3 — tema A, tom jornalistico (1), CTA X.
- Checkpoint 6: copy aprovado, densidade mantida, **estilo IG** (escuro 1080x1350) mantido.
- Step 7: templates copiados do run 155216 + `render-slides.cjs`; JPEGs em `output/2026-03-21-162055/v1/images/`.
- Step 8: aguardando confirmacao explicita para publicar (ou agendar).

## Run 2026-03-21-162055 — publicacao

- Usuario pediu publicar no Instagram; **API nao chamada** — sem `.env` com `INSTAGRAM_ACCESS_TOKEN` / `INSTAGRAM_USER_ID`.
- Legenda pronta: `v1/caption-instagram.txt`. Comando documentado em `v1/publish-result.md`.

## Run 2026-03-22-125212

- Tema: Uber × Rivian robotáxis (US$ 1,25 bi) — escolhido pelo usuario no checkpoint 3 (alternativa ao superapp OpenAI).
- Tom: Jornalístico Objetivo. CTA: "Você entraria num carro sem motorista?"
- Copy aprovada pelo Quality Reviewer (8.6/10) sem mudanças bloqueantes.
- Sugestões do revisor aplicadas: emoji 🤖🚗, hashtag #robotaxis, remoção de #economiacriativa.
- Estilo visual: editorial escuro (continuidade do run anterior). Foto do slide 1 corrigida (Unsplash ID original inválido).
- Slides renderizados via HTML/CSS + Playwright (render-slides.cjs).
- Dry-run passou. Publicação live bem-sucedida.
- **Post URL:** https://www.instagram.com/p/DWMXWF_lRpS/
- **Post ID:** 17871834294572577
- Preferências confirmadas: editorial escuro, tom jornalístico, fontes Reuters/AP priorizadas.
