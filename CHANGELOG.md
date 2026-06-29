# Histórico de Mudanças

## [2026-06-29T00:00:00Z] — Changelog Finishing Touch: Add Changelog Custom Finishing Touch

### 🚀 New Features

- **Changelog finishing touch recipe** — Added a CodeRabbit recipe that automatically prepends a Keep a Changelog–formatted entry to `CHANGELOG.md` upon PR merge, with emoji-prefixed sections (New Features, Bug Fixes, Chores & Maintenance) and ISO 8601 timestamps.

### ⚙️ Chores & Maintenance

- **CHANGELOG.md updated** — Prepended a structured changelog entry documenting the automated changelog finishing touch recipe, including details on the new CodeRabbit recipe integration and Keep a Changelog standardisation applied to previous entries.

---

## [2026-06-29T00:00:00Z] — Changelog Finishing Touch: Add Custom Finishing Touch Changelog

### 🚀 New Features

- **Automated changelog finishing touch** — Introduced a CodeRabbit recipe that automatically generates a Keep a Changelog–formatted entry upon PR merge, categorising changes into New Features, Bug Fixes, and Chores & Maintenance sections with ISO 8601 timestamps.

### ⚙️ Chores & Maintenance

- **Changelog entry for Login and Authentication** — Prepended a structured English changelog entry documenting the login page, authentication endpoint (`POST /auth/login`), JWT-protected routes, logout flow, expired token handling, and session-based redirect behaviour.
- **Keep a Changelog standardisation** — Applied ISO 8601 date headers, emoji-prefixed section titles, and bold entry labels across new changelog entries for improved readability and consistency.

---

## [2026-06-29T00:00:00Z] — Changelog Finishing Touch: Login e Autenticação

### 🚀 New Features

- **English changelog entry** — Added a Keep a Changelog–formatted entry in English for the Login and Authentication milestone, covering the login page, authentication endpoint, JWT-protected routes, logout flow, and automatic session redirect.

### 🐛 Bug Fixes

- **Expired token handling documented** — Changelog now documents the automatic logout and redirect behaviour triggered by a `401` response from the API.

### ⚙️ Chores & Maintenance

- **Changelog standardisation** — Adopted Keep a Changelog formatting with ISO 8601 date headers, emoji-prefixed sections, and bold entry titles for improved readability.

---

## [2026-06-29] — Login e Autenticação

### 🚀 New Features

- **Login page** — Added a login screen with email and password fields, requiring authentication before accessing the Kanban board.
- **Authentication endpoint (`POST /auth/login`)** — New API endpoint that validates credentials and returns a JWT token valid for 24 hours.
- **JWT-protected API routes** — All `/todos` routes now require a valid JWT in the `Authorization` header; requests without a valid token receive a `401` response.
- **Logout with session cleanup** — Added a "Sair" (logout) button to the main panel that clears the token and redirects to the login page.
- **Automatic session-based redirect** — On app load, if a valid token exists in `localStorage`, the user is taken directly to the board; otherwise the login screen is shown.

### 🐛 Bug Fixes

- **Expired token handling** — If the API returns `401`, the app now automatically logs out and redirects the user to the login page instead of failing silently.

### ⚙️ Chores & Maintenance

- **Added `jsonwebtoken` dependency** — The `jsonwebtoken` library (v9.0.3) was added to the API for JWT generation and validation.

---

## 29/06/2026 — Login e Autenticação

### 🚀 Novas Funcionalidades

- **Página de login** — Foi criada uma tela de login com campos de e-mail e senha, permitindo que apenas usuários autorizados acessem o quadro de tarefas.

- **Endpoint de autenticação (`POST /auth/login`)** — A API agora possui um endpoint de login que valida as credenciais e retorna um token JWT válido por 24 horas.

- **Proteção das rotas da API com JWT** — Todas as rotas de tarefas (`/todos`) agora exigem um token JWT válido no cabeçalho `Authorization`. Requisições sem token ou com token inválido recebem resposta `401`.

- **Logout com limpeza de sessão** — Um botão "Sair" foi adicionado ao painel principal. Ao clicar, o token é removido e o usuário é redirecionado para a página de login.

- **Redirecionamento automático por sessão** — Ao abrir o aplicativo, se um token válido já estiver salvo no `localStorage`, o usuário é levado direto ao painel. Caso contrário, é exibida a tela de login.

- **Tratamento de token expirado** — Se a API retornar `401`, o aplicativo faz logout automático e redireciona o usuário para a tela de login.

### ⚙️ Manutenção

- **Dependência `jsonwebtoken` adicionada** — A biblioteca `jsonwebtoken` (v9.0.3) foi incluída na API para geração e validação de tokens JWT.

---

## 29/06/2026

### Novidades

- **Quadro Kanban** — A antiga lista de tarefas foi substituída por um quadro visual dividido em três colunas (A Fazer, Fazendo, Pronto). Assim você consegue ver rapidamente o andamento de cada tarefa.

- **Arraste e solte tarefas** — Agora você pode arrastar os cartões de uma coluna para outra para mudar o status da tarefa sem precisar clicar em botões.

- **Botões para mover tarefas** — Cada cartão tem setas ← e → que permitem mover a tarefa para a coluna anterior ou seguinte, sem precisar arrastar.

- **Campo de situação na lista de tarefas** — Cada tarefa agora tem um campo de "situação" (a fazer, fazendo, pronto) no lugar do antigo "sim/não" de concluído. Assim fica mais fácil acompanhar o progresso.

- **Exportar CSV com a situação da tarefa** — Na hora de exportar suas tarefas para um arquivo de planilha, agora também é salvo em qual coluna do quadro cada tarefa está.

- **Importar CSV com suporte à situação** — Ao importar um arquivo de planilha, o sistema lê automaticamente a coluna de situação e coloca cada tarefa no lugar certo do quadro.

- **Quadro adaptável para celular** — Em telas menores que 768 pixels, o quadro se ajusta automaticamente para uma única coluna, ficando mais fácil de usar no celular.

- **Importar tarefas de um arquivo CSV** — Agora você pode importar várias tarefas de uma vez usando o botão "Importar CSV". É só selecionar o arquivo e todas as tarefas são adicionadas de uma só vez.

- **Criação do aplicativo de tarefas** — Foi criado um aplicativo onde você pode adicionar, ver, editar e excluir tarefas.

- **Criação da API para gerenciar tarefas** — Foi criado um sistema que permite a comunicação entre o aplicativo e o servidor, para que suas tarefas fiquem salvas online.

- **Integração do aplicativo com o servidor** — O aplicativo de tarefas foi conectado ao servidor, então agora as tarefas são salvas automaticamente e não se perdem mais quando você fecha a página.

- **Exportar tarefas para planilha** — Agora você pode baixar sua lista de tarefas em formato CSV, que pode ser aberto no Excel ou em outros programas de planilhas.

- **Melhorias nos processos automáticos** — Foram criados processos para gerar automaticamente este histórico de mudanças sempre que algo novo for lançado, além de pequenas correções e melhorias nos processos que rodam automaticamente.

- **Documentação do projeto** — Foi criado e atualizado o arquivo README com explicações sobre o projeto e como ele funciona.
