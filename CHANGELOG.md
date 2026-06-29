# Histórico de Mudanças

## [2026-06-29T00:00:00] - Add Custom Changelog Finishing Touch

### ⚙️ Chores & Maintenance

- Configured CodeRabbit custom finishing touch recipe (`changelog`) to automatically generate and prepend structured changelog entries for each pull request.
- Recipe categorizes changes into 🚀 New Features, 🐛 Bug Fixes, and ⚙️ Chores & Maintenance sections following Keep a Changelog standards with ISO 8601 timestamps.

---

## [2026-06-29T00:00:00] - Add Custom Changelog Finishing Touch

### ⚙️ Chores & Maintenance

- Added custom CodeRabbit finishing touch recipe (`changelog`) to automatically generate and prepend structured changelog entries on each PR.
- Recipe follows Keep a Changelog standards with categorized sections (🚀 New Features, 🐛 Bug Fixes, ⚙️ Chores & Maintenance) and ISO 8601 timestamps.

---

## [2026-06-29T00:00:00] - Changelog Format Standardization Recipe

### ⚙️ Chores & Maintenance

- Applied CodeRabbit finishing touch recipe to generate and prepend a structured changelog entry for the changelog cleanup PR.
- Consolidated changelog header format to use hyphen (`-`) separator, aligning with Keep a Changelog standards.
- Removed duplicate `[2026-06-29]` section (without timestamp), merging it into the single timestamped entry.

---

## [2026-06-29T00:00:00] - Changelog Cleanup & Standardization

### ⚙️ Chores & Maintenance

- Standardized changelog version header separator from em dash (`—`) to hyphen (`-`) for Keep a Changelog compliance.
- Removed duplicate changelog section for `[2026-06-29]` (without timestamp), consolidating into the single timestamped entry.
- Refined wording in feature bullet points for clarity and consistency.

---

## [2026-06-29T00:00:00] - Kanban Board & CSV Status Support

### 🚀 New Features

- **Kanban board** — Replaced the simple todo list with a three-column Kanban board (To Do, In Progress, Done), giving a visual overview of task progress.
- **Drag-and-drop tasks** — Cards can be dragged and dropped between Kanban columns to update their status instantly.
- **Move buttons on cards** — Each card exposes ← and → arrow buttons to move a task to the previous or next column without dragging.
- **Status field in API** — Todo items now carry a `status` field (`todo`, `in_progress`, `done`) replacing the boolean `done` flag, enabling multi-stage tracking.
- **CSV export with status column** — Exported CSV files now include a `kanban_board` column recording each task's current Kanban status.
- **CSV import with status support** — Importing a CSV reads the `kanban_board` column and places each task in the correct Kanban column automatically.
- **Responsive Kanban layout** — On screens narrower than 768 px the board switches to a single-column stacked layout for comfortable mobile use.

### ⚙️ Chores & Maintenance

- Introduced `VALID_STATUSES` constant in `api/index.js` to centralise status validation.
- Refactored the `/todos/import` endpoint to accept an `items` array (objects with `text` and `status`) instead of a plain `texts` string array.

---

## 29/06/2026

- **Importar tarefas de um arquivo CSV** — Agora você pode importar várias tarefas de uma vez usando um botão "Importar CSV". O sistema lê o arquivo e adiciona todas as tarefas automaticamente na sua lista.

- **Nova forma de criar várias tarefas de uma só vez** — Foi criada uma função no servidor que permite cadastrar várias tarefas em um único envio, poupando tempo e esforço.

---

## 29/06/2026

- **Criação do aplicativo de tarefas** — Foi criado um aplicativo onde você pode adicionar, visualizar, editar e excluir tarefas usando HTML, CSS e JavaScript.

- **Criação do arquivo README** — Adicionado um arquivo explicando sobre o projeto e como ele funciona.

- **Configuração de revisão automática de código** — Configurada uma ferramenta que revisa o código automaticamente para garantir mais qualidade.

- **Criação de uma API para gerenciar tarefas** — Foi criada uma API (um sistema que permite a comunicação entre programas) para gerenciar as tarefas do aplicativo.

- **Integração do aplicativo com a API** — O aplicativo de tarefas foi conectado à API, então agora as tarefas são salvas em um servidor, e não apenas no navegador. Isso significa que as tarefas não são mais perdidas ao fechar a página.

- **Funcionalidade de exportar tarefas para CSV** — Agora é possível exportar a lista de tarefas para um arquivo CSV (um formato que pode ser aberto no Excel ou em programas de planilhas).

- **Melhorias no processo de publicação de mudanças** — Foram criados processos automáticos para:
  - Gerar automaticamente um histórico de mudanças (changelog) sempre que algo novo for lançado
  - Melhorar a forma como as mudanças são registradas para ficarem mais fáceis de entender
  - Usar ferramentas que ajudam a escrever esse histórico de forma mais clara

- **Ajustes nos processos automáticos** — Pequenas correções e melhorias nos processos que rodam automaticamente quando uma nova funcionalidade é publicada.

- **Atualizações no arquivo README** — O documento explicativo do projeto foi atualizado com mais informações.
