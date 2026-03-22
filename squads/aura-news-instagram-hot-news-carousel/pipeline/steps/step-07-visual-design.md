---
execution: subagent
agent: visual-designer
format: instagram-feed
inputFile: squads/aura-news-instagram-hot-news-carousel/output/carousel-copy.md
outputFile: squads/aura-news-instagram-hot-news-carousel/output/carousel-assets.md
model_tier: powerful
---

# Step 07: Visual Design

## Context Loading
- `output/carousel-copy.md` — texto final do carrossel.
- `output/review-report.md` — correcoes do revisor.
- `output/checkpoint-design.md` — aprovacao para design.

## Instructions
### Process
1. Definir sistema visual coerente com Aura News.
2. Gerar composicao para todos os slides.
3. Entregar pacote de assets pronto para publicacao.

## Output Format
```
CAROUSEL ASSETS
- Design system:
- Slides:
  - slide-01.jpg
  - ...
- Caption final:
- Checklist de validacao:
```

## Output Example
Sistema visual estilo “notícia IG”: fundo escuro, painel inferior com gradiente, titulos sans em caixa alta (`Montserrat`), corpo legivel (`Source Sans 3`), acentos Aura (`#0B3D5C` / ciano). Slides exportados **1080x1350** com consistencia completa. Templates HTML/CSS por run (`html/slide-base.css` + `slide-01.html` … `slide-08.html`); JPEGs via `render-slides.cjs` quando aplicável.

## Veto Conditions
1. Arquivos fora do formato exigido.
2. Baixa legibilidade em mobile.

## Quality Criteria
- [ ] Slides coerentes entre si.
- [ ] Contraste e hierarquia aprovados.
- [ ] Pacote pronto para upload.
