CAROUSEL ASSETS — Aura News
Run ID: 2026-03-21-162055

---

## Design system (estilo “notícia IG” + Aura)

Referência: `squads/aura-news-instagram-hot-news-carousel/_investigations/consolidated-analysis.md`.

- **Export:** 1080 × 1350 px (4:5).
- **Fontes:** `Montserrat` 800 títulos; `Source Sans 3` corpo.
- **Templates:** `v1/html/slide-base.css` + `slide-01.html` … `slide-08.html`.
- **Fotos de fundo:** cada slide inclui `.slide-photo` com imagem **Unsplash** (URL em `background-image`; véu escuro em `.slide::before` + painel inferior). Para trocar a imagem, edite o `style` do bloco `.slide-photo` no HTML ou substitua por ficheiro local em `v1/html/assets/` e `url('assets/nome.jpg')`.
- **Checkpoint 06:** copy aprovado; densidade mantida; estilo IG mantido.

---

## JPEGs gerados

Pasta: `v1/images/slide-01.jpg` … `slide-08.jpg`

Regenerar:

```bash
node squads/aura-news-instagram-hot-news-carousel/output/2026-03-21-162055/v1/render-slides.cjs
```

(a partir da raiz do repositório)

---

## Legenda e hashtags

Usar `v1/carousel-copy.md` — blocos `=== CAPTION ===` e `=== HASHTAGS ===`.

---

## Checklist pre-publish

- [x] 8 JPEGs, mesma resolução e sistema visual.
- [ ] Aprovação explícita no checkpoint 08 antes de publicar.
- [ ] Credenciais `instagram-publisher` (`.env`) se publicação via API.
