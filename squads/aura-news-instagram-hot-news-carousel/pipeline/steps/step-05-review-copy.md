---
execution: inline
agent: quality-reviewer
inputFile: squads/aura-news-instagram-hot-news-carousel/output/carousel-copy.md
outputFile: squads/aura-news-instagram-hot-news-carousel/output/review-report.md
---

# Step 05: Review Copy

## Context Loading
- `output/carousel-copy.md` — texto gerado.
- `pipeline/data/quality-criteria.md` — criterios oficiais.
- `_opensquad/_memory/company.md` — alinhamento de marca.

## Instructions
### Process
1. Avaliar copy por criterio.
2. Atribuir score e parecer.
3. Listar correcoes bloqueantes e sugestoes.

## Output Format
```
REVIEW REPORT
- Verdict:
- Overall score:
- Criteria scores:
- Required changes:
- Suggestions:
```

## Output Example
Verdict: CONDITIONAL APPROVE  
Overall: 7.8/10  
Required change: simplificar slide 4.  
Suggestion: CTA mais direto.

## Veto Conditions
1. Relatorio sem scores.
2. Parecer ambiguo.

## Quality Criteria
- [ ] Justificativa por criterio.
- [ ] Required changes acionaveis.
- [ ] Parecer final claro.
