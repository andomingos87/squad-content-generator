CAROUSEL ASSETS — Aura News
Run ID: 2026-03-21-162055

---

## Design system (estilo "notícia IG" + Aura) — v2

Referência: `squads/aura-news-instagram-hot-news-carousel/_investigations/consolidated-analysis.md`.

- **Export:** 1080 × 1350 px (4:5).
- **Fontes:** `Montserrat` 700/800/900 títulos; `Source Sans 3` corpo.
- **Templates:** `v1/html/slide-base.css` (v2) + `slide-01.html` … `slide-08.html`.
- **Fotos de fundo:** cada slide inclui `.slide-photo` com imagem **Unsplash** curada por brief (`v1/image-brief.md`). Véu escuro com vignette radial em `.slide::before` + grain SVG em `.slide::after` + painel inferior opaco. Para trocar a imagem, edite o `style` do bloco `.slide-photo` no HTML.
- **Efeitos v2:** grain (SVG noise 4.5% overlay), vignette radial, text-shadow duplo (preto + azul glow), accent keywords (`.accent` → cyan `#7dd3fc`), barra ciano sob marca, slide numbering, source tag (slide 03).
- **Filtro foto:** `saturate(0.85) contrast(1.12) brightness(0.88)` — visual cinematográfico.

---

## Imagens curadas (Unsplash)

| Slide | Tema | Photo ID |
|-------|------|----------|
| 01 (Capa) | AI abstracto | `1677442136019-21780ecad995` |
| 02 | Data center / servers | `1558494949-ef010cbdcc31` |
| 03 | Código / dev screen | `1504639725590-34d0984388bd` |
| 04 | Profissional + servidor | `1573164713988-8665fc963095` |
| 05 | Circuito / cybersecurity | `1550751827-4bd374c3f58b` |
| 06 | Corredor escritório moderno | `1497366216548-37526070297c` |
| 07 | Motherboard macro | `1518770660439-4636190af475` |
| 08 (CTA) | Skyline cidade à noite | `1519501025264-65ba15a82390` |

Brief completo: `v1/image-brief.md`

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
- [x] Gate visual preenchido (`v1/visual-review-gate.md`).
- [ ] Aprovação explícita do utilizador antes de publicar.
- [ ] Credenciais `instagram-publisher` (`.env`) se publicação via API.
