---
execution: subagent
agent: trend-researcher
inputFile: squads/aura-news-instagram-hot-news-carousel/pipeline/data/research-brief.md
outputFile: squads/aura-news-instagram-hot-news-carousel/output/news-brief.md
model_tier: fast
---

# Step 01: Breaking News Research

## Context Loading
- `pipeline/data/research-brief.md` — referencias e diretrizes de pesquisa.
- `_investigations/*/pattern-analysis.md` — padroes coletados nas contas de referencia.
- `_opensquad/_memory/company.md` — contexto da Aura News.

## Instructions
### Process
1. Identificar top pautas quentes das ultimas 24-72h.
2. Verificar cada pauta com no minimo duas fontes.
3. Entregar brief com fatos, contexto e implicacoes.

## Output Format
```
HOT NEWS BRIEF
Item:
- Headline:
- What happened:
- Why it matters:
- Source 1:
- Source 2:
- Confidence:
```

## Output Example
Exemplo:
Item 1
- Headline: "Empresa X libera modelo multimodal"
- What happened: "API publica anunciada em evento oficial"
- Why it matters: "Reduz barreira para criadores e startups"
- Source 1: "https://..."
- Source 2: "https://..."
- Confidence: "alta"

## Veto Conditions
1. Claim sem fonte verificavel.
2. Brief com linguagem sensacionalista.

## Quality Criteria
- [ ] Minimo de duas fontes por item.
- [ ] Linguagem objetiva.
- [ ] Implicacao pratica clara.
