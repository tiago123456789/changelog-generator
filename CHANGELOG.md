# Histórico de Mudanças

## [2026-06-29] - 2026-06-29T00:00:00

### 🚀 New Features

- **Import todos from CSV** — Added a new "Import CSV" button to the todo app that allows users to upload a CSV file and bulk-import todos into the list. The importer handles quoted fields, BOM stripping, and skips empty lines.
- **POST /todos/import API endpoint** — New backend endpoint that accepts an array of todo texts and creates multiple todos in a single request, returning the created items with their assigned IDs.

### 🐛 Bug Fixes

- **CSV import validation** — Import now validates file contents and ignores empty or invalid rows, preventing bad data from being added to the todo list.
- **Empty CSV feedback** — Users receive a clear alert message when the uploaded CSV file contains no usable todo entries.

### ⚙️ Chores & Maintenance

- **CodeRabbit custom recipe** — Added a custom "changelog" finishing touch recipe to automate structured changelog generation following Keep a Changelog standards.

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
