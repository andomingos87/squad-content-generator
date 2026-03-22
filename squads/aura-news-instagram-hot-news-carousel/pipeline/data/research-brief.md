# Research Brief — Aura News Hot Carousel

Prepared: 2026-03-21  
Scope: Curadoria de noticias quentes, copy para carrossel, design mobile-first, automacao de publicacao no Instagram.

## Key Findings

1. Curadoria de breaking news precisa priorizar verificacao de fonte e contexto. Frameworks de fact-checking e classificacao de fonte ajudam a evitar viralizacao de desinformacao.
2. Em carrossel, a capa e o hook governam o swipe rate. Estrutura recomendada: hook -> desenvolvimento por slides -> CTA final.
3. No design, legibilidade mobile e contraste alto sao obrigatorios. Texto denso e contraste baixo derrubam retencao.
4. Publicacao automatica exige validacao de requisitos da API, dry-run e aprovacao explicita antes de publicar ao vivo.

## Domain Notes

### Curadoria de noticias quentes
- Usar pelo menos 2 fontes independentes para cada claim central.
- Marcar nivel de confianca (alto, medio, baixo) por item.
- Priorizar fonte primaria (comunicado oficial, documento original, publicacao institucional).

### Copy para carrossel Instagram
- Primeira dobra deve abrir loop de curiosidade com promessa clara.
- Cada slide precisa avancar a narrativa, sem repeticao.
- CTA final objetivo: salvar, compartilhar ou comentar.

### Design de carrossel
- Visual em 1080x1440, hierarquia forte e leitura instantanea.
- Padrao consistente de capa, desenvolvimento e fechamento.
- Evitar excesso de texto por slide e elementos sem funcao.

### Automacao de publicacao
- Fluxo recomendado: validacao -> preview -> dry-run -> confirmacao humana -> publish.
- Conferir limite de caracteres, formato de imagem e contagem de slides.
- Guardar log de resultado com timestamp e URL do post publicado.

## Sources

- https://aclanthology.org/2021.stil-1.23/
- https://wan-ifra.org/2025/12/a-framework-for-labelling-and-identifying-news-sources/?lang=es
- https://bellingcat.com/resources/how-tos/2023/10/26/separating-fact-from-fiction-on-social-media-in-times-of-conflict
- https://resont.com/blog/top-instagram-carousel-hooks/
- https://postnitro.ai/blog/post/carousel-copywriting-framework
- https://postnitro.ai/blog/post/carousel-typography-guide-perfecting-font-sizes-and-spacing
- https://www.heyorca.com/blog/instagram-media-specs-best-practices-2026
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/content-publishing/
- https://postproxy.dev/blog/content-approval-workflows-for-automated-social-media-publishing/
