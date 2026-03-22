---
execution: inline
agent: instagram-publisher
inputFile: squads/aura-news-instagram-hot-news-carousel/output/carousel-assets.md
outputFile: squads/aura-news-instagram-hot-news-carousel/output/publish-result.md
---

# Step 09: Instagram Publish

## Context Loading
- `output/carousel-assets.md` — imagens e legenda.
- `output/checkpoint-publish.md` — confirmacao do usuario.
- `pipeline/data/quality-criteria.md` — validacoes finais.

## Instructions
### Process
1. Executar validacao tecnica de imagens e legenda.
2. Executar dry-run e reportar status.
3. Publicar apenas com confirmacao explicita.

## Output Format
```
PUBLISH RESULT
- Validation:
- Dry-run:
- Live publish:
- Post URL:
- Post ID:
- Timestamp:
```

## Output Example
Validation: passed  
Dry-run: passed  
Live publish: success  
Post URL: https://www.instagram.com/p/XXXXXXXX/  
Post ID: 123456789  
Timestamp: 2026-03-21T18:40:00Z

## Veto Conditions
1. Ausencia de confirmacao explicita.
2. Dry-run falhou.

## Quality Criteria
- [ ] Log completo de publish.
- [ ] URL ou erro detalhado.
- [ ] Estado final claro (success/failure).
