# Consolidated Sherlock Analysis

Date: 2026-03-21 (updated: auditoria visual com sessão Instagram autenticada)  
Profiles: [evolving.ai](https://www.instagram.com/evolving.ai/), [cataiportal](https://www.instagram.com/cataiportal/), [artificialintelligenceee](https://www.instagram.com/artificialintelligenceee/), [innovation](https://www.instagram.com/innovation/)

## Investigation Outcome

- **Anterior:** extração por post estava bloqueada sem login; baseline era provisório.
- **Atual:** grids dos quatro perfis foram inspecionados no browser com sessão logada (capturas de referência em `ref-*-grid.png` no diretório temporário de screenshots do Cursor). Padrões visuais são consistentes entre contas de nicho “AI news” em inglês e PT-BR.

## DNA visual comum (o que os quatro fazem)

| Aspecto | Padrão dominante |
|--------|-------------------|
| **Proporção** | Carrossel 4:5 (1080×1350) — maximiza área no feed. |
| **Foto / arte** | Imagem forte no topo (CEO, logo, cena “tech”, às vezes composição tipo capa de revista). Contraste alto, muitas vezes cine/gradação levemente desaturada. |
| **Texto** | Headline grande, **sans-serif pesada**, muitas vezes **MAIÚSCULAS**, branco sobre **faixa escura ou gradiente inferior** (bottom third ~30–40%) para legibilidade. |
| **Microcopy** | “SWIPE FOR MORE” / “ARRASTE PARA MAIS >>” na capa ou rodapé do slide para indicar carrossel. |
| **Marca** | Watermark pequeno (handle, sigla ou logo) em canto; em alguns casos linha de colaboração (“x …”). |
| **Acento de cor** | Alguns perfis (ex.: innovation) destacam **palavras-chave** em roxo/lavanda ou amarelo em cima do branco. |
| **Grid** | Feed “de revista”: cada miniatura lê-se como mesma família tipográfica + mesma colocação de texto. |

## Notas por perfil (nuances)

- **evolving.ai:** composições “viral editorial” — logos grandes, às vezes moldura estilo “post dentro do post”; headlines provocativas; mistura carrossel + Reels.
- **cataiportal:** alinhado ao padrão acima em PT-BR; texto inferior com overlay escuro; CTA de arrastar explícito; bio e pins reforçam produto (newsletter, etc.).
- **artificialintelligenceee:** tipografia muito bold (estilo Impact/Anton); selo “SWIPE” em botão; marca “AI3E” recorrente.
- **innovation:** ênfase em **keyword** colorida (roxo) no headline; muitos carrosséis; às vezes recorte circular (picture-in-picture) para rosto ou detalhe.

## Gap vs. output Aura News atual (run `2026-03-21-155216`)

Os slides gerados hoje usam **fundo claro**, **serif editorial (Fraunces)** + **Source Sans**, layout centrado “cartão editorial”. Isso é legível e coerente internamente, mas **não** espelha o look dos referências, que é **foto de capa + faixa inferior escura + sans bold em caixa alta**.

## O que emular (produto)

1. Manter **1080×1350** e hierarquia clara por slide.
2. Migrar para **template “notícia Instagram”**: imagem de fundo (ou cor sólida escura) + **gradiente inferior** + headline em **sans extra-bold** (ex.: Montserrat/Inter/Bebas/Archivo Black — validar licença).
3. **Capa:** headline curta + linha “Arraste para mais” / “Deslize para mais” (PT-BR).
4. **Slides seguintes:** mesmo bloco de texto inferior para o grid não “quebrar” a identidade.
5. **Marca:** `@auranews.ai` discreto (canto inferior ou sob o headline), alinhado ao checkpoint de CTA.
6. **Imagens:** prompts ou stock com “cinematic, high contrast, tech news”; evitar fundo claro sem overlay se o objetivo for parecer evolving/catai/innovation.

## O que evitar

1. Sensacionalismo não suportado pelo brief (referências são agressivas; Aura News mantém tom jornalístico).
2. Texto pequeno ou baixo contraste sobre foto sem gradiente.
3. Misturar no mesmo feed capas claras estilo revista e capas escuras “Instagram native” sem decisão de marca.

## Onde “conseguir” esse estilo (processo + ferramentas)

| Fonte | Uso |
|--------|-----|
| **Os próprios perfis** | Referência contínua de grid, proporção de texto e ganchos visuais. |
| **Figma / Canva** | Prototipar um modelo 1080×1350 com camadas fixas (foto, gradiente, texto, marca). |
| **HTML + Playwright** (já no repo) | Automatizar export PNG dos slides a partir do mesmo CSS — **mudar** o CSS/HTML para o template escuro. |
| **Bancos de imagem** | Unsplash, Pexels, ou geradores (skill `image-generator`) com prompt alinhado ao tema da notícia. |
| **Inspiração extra** | Pinterest/Behance “Instagram carousel tech news” — só para composição, não para copiar marca alheia. |

## Próximos passos recomendados

1. Definir no `carousel-assets.md` / agente visual **um sistema único** (cores de acento Aura + regra de destaque de palavra opcional).
2. Regenerar `slide-01.html` … `slide-08.html` e rodar `render-slides.cjs`.
3. (Opcional) Reexecutar Sherlock para extrair legendas/hashtags por post e enriquecer `pattern-analysis.md` por perfil.

## Reliability

- Análise de **grid e padrão visual** está baseada em inspeção direta com sessão autenticada.
- **Texto exato** de legendas e hashtags por post ainda pode ser complementada com nova passagem de extração (HTML/API) se necessário.
