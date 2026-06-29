# Histórico de Mudanças

## [2026-06-29 00:00] — Add Changelog Entry

### ⚙️ Chores & Maintenance

- **Changelog entry recipe** — Added a CodeRabbit finishing touch recipe that automatically generates and prepends a structured changelog entry to `CHANGELOG.md` for each pull request, following Keep a Changelog standards with categorized sections for new features, bug fixes, and maintenance.

---

## [2026-06-29 00:00] — Add Changelog Finishing Touch

### ⚙️ Chores & Maintenance

- **Changelog finishing touch recipe** — Added a CodeRabbit finishing touch recipe that automatically generates and prepends structured changelog entries to `CHANGELOG.md` on each pull request, following Keep a Changelog standards with categorized sections for new features, bug fixes, and maintenance.

---

## [2026-06-29 00:00] — Add Changelog

### ⚙️ Chores & Maintenance

- **Changelog generation** — Added automated changelog entry generation via the custom CodeRabbit finishing touch recipe, prepending structured entries to `CHANGELOG.md` following Keep a Changelog standards with categorized sections for new features, bug fixes, and maintenance.

---

## [2026-06-29 00:00] — Add Custom Changelog Finishing Touch

### ⚙️ Chores & Maintenance

- **Custom changelog recipe** — Added a custom changelog finishing touch recipe to automatically generate and prepend structured changelog entries to `CHANGELOG.md`, following Keep a Changelog standards with categorized sections for new features, bug fixes, and maintenance.

---

## [2026-06-29 00:00] — Update Changelog

### ⚙️ Chores & Maintenance

- **Changelog update** — Updated `CHANGELOG.md` to document the changelog timestamp formatting change, adding a structured entry following Keep a Changelog standards.

---

## [2026-06-29 00:00] — Changelog Formatting Update

### ⚙️ Chores & Maintenance

- **Changelog timestamp format** — Updated changelog date entries to include time (`YYYY-MM-DD HH:MM`) for more precise release tracking, aligning with Keep a Changelog standards.

---

## [2026-06-29 00:00] — Login and Authentication

### 🚀 New Features

- **Login page** — Created a login screen with email and password fields, allowing only authorized users to access the task board.
- **Authentication endpoint (`POST /auth/login`)** — The API now has a login endpoint that validates credentials and returns a JWT token valid for 24 hours.
- **JWT-protected API routes** — All task routes (`/todos`) now require a valid JWT token in the `Authorization` header. Requests without a token or with an invalid token receive a `401` response.
- **Logout with session cleanup** — A "Logout" button was added to the main panel. On click, the token is removed and the user is redirected to the login page.
- **Automatic session redirect** — When the app opens, if a valid token is already saved in `localStorage`, the user goes directly to the dashboard. Otherwise, the login screen is shown.
- **Expired token handling** — If the API returns `401`, the app automatically logs out and redirects the user to the login screen.

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
