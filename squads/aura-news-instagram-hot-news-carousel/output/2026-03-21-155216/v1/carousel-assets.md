CAROUSEL ASSETS — Aura News
Run ID: 2026-03-21-155216

---

## Design system (estilo “notícia IG” + Aura)

Referência de mercado: `squads/aura-news-instagram-hot-news-carousel/_investigations/consolidated-analysis.md`.

- **Viewport / export:** **1080 × 1350 px (4:5)** — feed Instagram carrossel.
- **Fontes:** `Montserrat` 800 títulos (caixa alta); `Source Sans 3` 500 corpo (texto corrido).
- **Cores (tokens em `html/slide-base.css`):** fundo base escuro `#050a10`; aura `#0B3D5C`; destaque de palavra opcional `#7DD3FC`; handle `#2BD4C7`.
- **Layout:** fundo com gradiente ambiental (área superior “visual”) + **painel inferior** com gradiente escuro para legibilidade; marca **AURA NEWS** no topo do conteúdo.
- **Capa (slide 1):** linha **Deslize para mais** + `@auranews.ai`.
- **Sem contador** tipo "1/8" nos JPEGs (o Instagram já mostra indicador nativo).

---

## Arquivos de template (HTML + CSS)

- **CSS compartilhado:** `v1/html/slide-base.css` — alterar tokens/layout uma vez; todos os slides importam.
- **Slides:** `v1/html/slide-01.html` … `slide-08.html` — texto copiado de `carousel-copy.md` (secção SLIDES).

---

## Arquivos de exportacao (JPEG, 8 imagens)

Pasta de saída:

`squads/aura-news-instagram-hot-news-carousel/output/2026-03-21-155216/v1/images/`

Ordem:

1. `slide-01.jpg` — Capa + hook + “Deslize para mais”
2. `slide-02.jpg` … `slide-07.jpg` — Corpo
3. `slide-08.jpg` — CTA final

**Regenerar JPEGs** a partir da raiz do repositório:

```bash
node squads/aura-news-instagram-hot-news-carousel/output/2026-03-21-155216/v1/render-slides.cjs
```

Reexecutar após alterar copy ou `slide-base.css` / HTML.

---

## Legenda para publicacao

Usar bloco `=== CAPTION ===` + `=== HASHTAGS ===` de `carousel-copy.md` (max 2200 caracteres).

---

## Checklist pre-publish

- [ ] 8 arquivos JPEG, 1080×1350, mesma família tipográfica.
- [ ] Contraste AA em texto sobre fundo (painel inferior + overlay).
- [ ] Legenda revisada (hook nos primeiros 125 caracteres).
- [ ] Skill `instagram-publisher`: `.env` com `INSTAGRAM_ACCESS_TOKEN` e `INSTAGRAM_USER_ID` (conta Business).

---

## Rastreabilidade (implementação)

- **Gate de revisão:** `v1/visual-review-gate.md` — decisão Aprovado.
- **Mudança principal:** substituição do sistema claro (Fraunces, 1080×1440) pelo sistema escuro “notícia IG” (1080×1350) com `slide-base.css`.
