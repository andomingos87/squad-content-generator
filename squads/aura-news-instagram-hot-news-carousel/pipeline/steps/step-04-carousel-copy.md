---
execution: subagent
agent: carousel-copywriter
format: instagram-feed
inputFile: squads/aura-news-instagram-hot-news-carousel/output/angle-brief.md
outputFile: squads/aura-news-instagram-hot-news-carousel/output/carousel-copy.md
model_tier: powerful
---

# Step 04: Carousel Copy

## Context Loading
- `output/angle-brief.md` — tese e mapa.
- `output/checkpoint-angle.md` — escolhas do usuario.
- `pipeline/data/tone-of-voice.md` — tons padrao.

## Instructions
### Process
1. Propor 2 tons e usar o aprovado no checkpoint.
2. Escrever copy de todos os slides.
3. Escrever legenda e hashtags.

## Output Format
```
CAROUSEL COPY
Slide 1:
...
Slide N:

CAPTION:
...

HASHTAGS:
#...
```

## Output Example
Slide 1: "A IA de hoje pode mudar sua rotina ja."
Slide 2: contexto simples.
...
CTA final: "Salve e compartilhe com quem precisa."

## Veto Conditions
1. Sem hook forte.
2. Sem CTA final.

## Quality Criteria
- [ ] Legenda clara.
- [ ] Narrativa sem repeticao.
- [ ] Formato Instagram Feed respeitado.
