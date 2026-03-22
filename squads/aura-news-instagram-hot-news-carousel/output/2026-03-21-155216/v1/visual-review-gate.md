# Gate de revisão — estilo “notícia IG” (run 2026-03-21-155216)

Data: 2026-03-21  
Run: `v1/`  
Referência de padrão: `squads/aura-news-instagram-hot-news-carousel/_investigations/consolidated-analysis.md`

## Decisão: **Aprovado** (critérios críticos atendidos)

Evidências: `render-slides.cjs` executado com exit code 0; oito JPEGs gerados em `v1/images/slide-01.jpg` … `slide-08.jpg`.

## Checklist técnico

| Item | Status |
|------|--------|
| Arquivos `slide-01..08.jpg` presentes | OK |
| Dimensão de export 1080×1350 (4:5) | OK (`render-slides.cjs` + viewport HTML) |
| Render sem erro | OK |

## Checklist design / marca

| Item | Status |
|------|--------|
| Overlay inferior favorece leitura em mobile | OK (`slide-base.css` — painel com gradiente inferior) |
| Headline sans bold, hierarquia consistente | OK (`Montserrat` 800, títulos em caixa alta) |
| Capa com microcopy de swipe + `@auranews.ai` | OK (`Deslize para mais` + handle) |
| Identidade Aura (cores `#0B3D5C` / acento ciano em tokens) sem copiar referências | OK |

## Checklist de conteúdo

| Item | Status |
|------|--------|
| Texto alinhado a `carousel-copy.md` | OK (slide 8 unificado com texto do CTA; demais slides literais) |
| Tom jornalístico preservado | OK |

## Notas

- **Antes:** slides claros em fundo creme, `Fraunces` + `Source Sans`, 1080×1440.
- **Depois:** fundo escuro com gradiente ambiental, painel inferior escuro, `Montserrat` + `Source Sans 3`, 1080×1350, `v1/html/slide-base.css` compartilhado.
- Logo raster da marca: não havia asset no repositório; marca por tipografia “AURA NEWS” / `@auranews.ai`.

## Reprovação futura

Reabrir se: cópia mudar sem atualizar HTML; falha de fonte (offline); ou contraste insuficiente em fotos de fundo quando imagens reais forem adicionadas.
