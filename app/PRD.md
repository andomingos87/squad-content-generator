# PRD — Opensquad SaaS MVP

## 1. Visão do Produto

Transformar o Opensquad — hoje uma ferramenta local de orquestração multi-agente — em uma aplicação web SaaS onde usuários podem criar squads de IA, executar pipelines e revisar outputs pelo navegador.

### 1.1 Objetivo do MVP

Entregar uma versão funcional para early adopters testarem gratuitamente, contendo:

- Cadastro e login (Supabase Auth)
- Criação e gerenciamento de squads via interface web
- Execução de pipelines com acompanhamento em tempo real
- Checkpoints interativos (aprovar/rejeitar conteúdo)
- Visualização e download de outputs gerados

**Fora do escopo do MVP:** cobrança (Stripe), planos pagos, onboarding avançado, marketplace de skills.

---

## 2. Usuários-Alvo

| Persona | Descrição |
|---------|-----------|
| **Criador de conteúdo** | Quer automatizar produção de carrosséis, posts, vídeos com IA |
| **Agência digital** | Precisa escalar produção de conteúdo para múltiplos clientes |
| **Solopreneur** | Busca ferramentas de automação para operar sozinho |

---

## 3. Arquitetura

```
┌─────────────────────────────────────────────────┐
│                  FRONTEND (React)                │
│  dashboard/ (existente, será adaptado)           │
│  - Auth (Login / Signup)                         │
│  - Dashboard: listar squads, criar, executar     │
│  - Run Viewer: acompanhar execução em tempo real │
│  - Checkpoints: aprovar/rejeitar via UI          │
└──────────────────────┬──────────────────────────┘
                       │ Supabase Client SDK
                       ▼
┌─────────────────────────────────────────────────┐
│              SUPABASE (Backend)                   │
│                                                   │
│  Auth ──── Email/password + Google OAuth          │
│  Database ─ Postgres (squads, runs, steps, etc.)  │
│  Storage ── Outputs (imagens, HTMLs)              │
│  Realtime ─ Subscriptions para live updates       │
│  Edge Fn ── API endpoints (criar/rodar squads)    │
│  RLS ────── Row Level Security (multi-tenant)     │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│          WORKER (execução de squads)              │
│  - Supabase Edge Function (Deno)                 │
│  - Lê pipeline config, executa steps             │
│  - Chama skills (OpenRouter, Instagram API)       │
│  - Atualiza estado no DB (Realtime propaga)       │
│  - Pausa em checkpoints, espera aprovação         │
└─────────────────────────────────────────────────┘
```

---

## 4. Schema do Banco de Dados

### 4.1 `profiles`

Extensão da tabela `auth.users` do Supabase.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID PK | FK → `auth.users.id` |
| `display_name` | TEXT | Nome exibido |
| `avatar_url` | TEXT | URL do avatar |
| `plan` | TEXT | Plano atual (`free` por padrão, para futuro Stripe) |
| `created_at` | TIMESTAMPTZ | Data de criação |

### 4.2 `squads`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID PK | Identificador único |
| `user_id` | UUID FK | → `profiles.id` |
| `name` | TEXT | Nome do squad |
| `slug` | TEXT UNIQUE | Slug URL-friendly |
| `description` | TEXT | Descrição |
| `config` | JSONB | Conteúdo do `squad.yaml` convertido |
| `pipeline` | JSONB | Conteúdo do `pipeline.yaml` convertido |
| `created_at` | TIMESTAMPTZ | - |
| `updated_at` | TIMESTAMPTZ | - |

### 4.3 `runs`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID PK | Identificador único |
| `squad_id` | UUID FK | → `squads.id` |
| `user_id` | UUID FK | → `profiles.id` |
| `status` | TEXT | `running` · `paused` · `completed` · `failed` |
| `current_step` | TEXT | Step em execução |
| `state` | JSONB | Equivalente ao `state.json` atual |
| `started_at` | TIMESTAMPTZ | - |
| `completed_at` | TIMESTAMPTZ | - |

### 4.4 `run_steps`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID PK | Identificador único |
| `run_id` | UUID FK | → `runs.id` |
| `step_name` | TEXT | Nome do step |
| `agent_name` | TEXT | Agente responsável |
| `status` | TEXT | `pending` · `running` · `completed` · `failed` |
| `input` | JSONB | Dados de entrada |
| `output` | JSONB | Dados de saída |
| `started_at` | TIMESTAMPTZ | - |
| `completed_at` | TIMESTAMPTZ | - |

### 4.5 `checkpoints`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID PK | Identificador único |
| `run_id` | UUID FK | → `runs.id` |
| `step_name` | TEXT | Step que gerou o checkpoint |
| `status` | TEXT | `waiting` · `approved` · `rejected` |
| `data` | JSONB | Conteúdo para review |
| `user_response` | JSONB | Resposta do usuário |
| `created_at` | TIMESTAMPTZ | - |
| `resolved_at` | TIMESTAMPTZ | - |

### 4.6 `user_credentials`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID PK | Identificador único |
| `user_id` | UUID FK | → `profiles.id` |
| `provider` | TEXT | `instagram` · `openrouter` · etc. |
| `credentials` | JSONB | Tokens encriptados |
| `created_at` | TIMESTAMPTZ | - |

**Segurança:** Todas as tabelas protegidas com RLS baseado em `user_id = auth.uid()`.

---

## 5. Páginas e Rotas

| Rota | Página | Auth | Descrição |
|------|--------|------|-----------|
| `/login` | Login | Pública | Email/senha + Google OAuth |
| `/signup` | Cadastro | Pública | Criar conta |
| `/` | Dashboard | Protegida | Lista de squads do usuário |
| `/squads/new` | Criar Squad | Protegida | Wizard: template ou personalizado |
| `/squads/:id` | Detalhe | Protegida | Config, pipeline, histórico de runs |
| `/squads/:id/run/:runId` | Run Viewer | Protegida | Virtual Office + status em tempo real |
| `/squads/:id/run/:runId/checkpoint/:cpId` | Checkpoint | Protegida | Revisar e aprovar/rejeitar conteúdo |
| `/settings` | Configurações | Protegida | Perfil do usuário |
| `/settings/credentials` | Credenciais | Protegida | API keys e tokens |
| `/politica-privacidade` | Privacidade | Pública | (já existe) |
| `/termos` | Termos | Pública | (já existe) |
| `/exclusao-dados` | Exclusão | Pública | (já existe) |

---

## 6. Stack Técnico

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| **Frontend** | React 19 + Vite 6 + TypeScript | Já existe no projeto |
| **UI** | Tailwind CSS + shadcn/ui | Moderno, rápido de montar, componentes prontos |
| **State** | Zustand | Já em uso |
| **Routing** | React Router 7 | Já em uso |
| **Visualização** | PixiJS 8 (Virtual Office) | Já em uso |
| **Auth** | Supabase Auth | Email + Google, zero config |
| **Database** | Supabase Postgres | Relacional + JSONB para flexibilidade |
| **Realtime** | Supabase Realtime | Substitui WebSocket local |
| **Storage** | Supabase Storage | Imagens e assets gerados |
| **Serverless** | Supabase Edge Functions (Deno) | Workers para pipeline execution |
| **Deploy** | Vercel (frontend) + Supabase (backend) | vercel.json já configurado |

---

## 7. O que reaproveitamos vs. o que muda

| Componente | Hoje (local) | SaaS MVP |
|------------|-------------|----------|
| Virtual Office (PixiJS) | Lê `state.json` via WebSocket local | Lê do Supabase Realtime |
| Squad config | Arquivos YAML no disco | JSONB no Postgres |
| Pipeline execution | Agentes Cursor (local) | Edge Function worker |
| Checkpoints | Cursor pausa e pergunta no terminal | UI web com botões approve/reject |
| Outputs | Arquivos locais (`output/`) | Supabase Storage |
| Auth | Nenhum | Supabase Auth (email + Google) |
| Credenciais | `.env` local | Tabela `user_credentials` encriptada |
| State updates | File watcher + WebSocket | Supabase Realtime subscriptions |

---

## 8. Fases de Implementação

### Fase 1 — Fundação (Semana 1)

- [ ] Setup projeto Supabase (tabelas, RLS, auth providers)
- [ ] Instalar `@supabase/supabase-js` no dashboard
- [ ] Criar `supabaseClient.ts` com variáveis de ambiente
- [ ] Instalar e configurar Tailwind CSS + shadcn/ui
- [ ] Implementar páginas de Login e Signup
- [ ] Criar `AuthProvider` com contexto de sessão
- [ ] Criar layout autenticado (sidebar + header com avatar)
- [ ] Proteger rotas com redirect para `/login`

### Fase 2 — Squads CRUD (Semana 1–2)

- [ ] Página Dashboard: listar squads do usuário
- [ ] Página Criar Squad: formulário + importar YAML
- [ ] Página Detalhe do Squad: config, pipeline, agents
- [ ] Templates prontos (Instagram Carousel como primeiro)
- [ ] Editar e deletar squads

### Fase 3 — Execução de Pipelines (Semana 2–3)

- [ ] Botão "Run" no detalhe do squad
- [ ] Edge Function worker para processar pipeline
- [ ] Registro de run e steps no banco
- [ ] Supabase Realtime para atualizar UI em tempo real
- [ ] Adaptar Virtual Office (PixiJS) para ler do Realtime
- [ ] Logs de execução visíveis na UI

### Fase 4 — Checkpoints & Outputs (Semana 3)

- [ ] UI de checkpoint: exibir conteúdo gerado para review
- [ ] Botões Approve / Reject com feedback
- [ ] Worker escuta aprovação e continua pipeline
- [ ] Galeria de outputs (imagens, HTMLs, captions)
- [ ] Download de assets do Supabase Storage

### Fase 5 — Settings & Credenciais (Semana 3–4)

- [ ] Página de perfil (nome, avatar)
- [ ] Gerenciamento de credenciais (Instagram token, OpenRouter key)
- [ ] Fluxo OAuth Instagram completo via UI
- [ ] Validação de tokens antes de executar pipeline

---

## 9. Requisitos Não-Funcionais

| Requisito | Meta |
|-----------|------|
| **Performance** | Dashboard carrega em < 2s, updates Realtime em < 500ms |
| **Segurança** | RLS em todas as tabelas, credenciais encriptadas, HTTPS |
| **Escalabilidade** | Suportar 50 usuários simultâneos no MVP |
| **Disponibilidade** | 99.5% uptime (Supabase + Vercel) |
| **Responsividade** | Desktop-first, mobile-friendly |

---

## 10. Métricas de Sucesso do MVP

| Métrica | Meta |
|---------|------|
| Usuários cadastrados | 20+ nos primeiros 30 dias |
| Squads criados | 50+ |
| Pipelines executados com sucesso | 80%+ taxa de conclusão |
| Feedback positivo | 70%+ dos early adopters |
| Bugs críticos | 0 em produção |

---

## 11. Riscos e Mitigações

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Edge Functions com timeout em pipelines longos | Alto | Quebrar em steps menores, usar filas |
| Tokens de usuário expirando | Médio | Validação antes de rodar, refresh automático |
| Custo de Supabase escalar | Baixo (MVP) | Free tier cobre MVP; Stripe antes de escalar |
| Complexidade de converter YAML → JSONB | Médio | Parser robusto + validação + templates |

---

## 12. Futuro (Pós-MVP)

- Integração Stripe para planos pagos
- Marketplace de skills e templates de squads
- Colaboração em equipe (workspaces compartilhados)
- API pública para integrações
- Mobile app (React Native)
- Métricas e analytics de performance dos squads
- Webhooks para integrações externas
