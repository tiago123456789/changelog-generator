# Histórico de Mudanças

## 30/06/2026 — 00:00 UTC

### 🚀 New Features

- **Todo description field** — Todos can now include an optional description when created or updated. The description is displayed on the card below the title in a smaller, muted style.

- **Description input in the UI** — A textarea has been added next to the todo title input, allowing users to type an optional description when adding a new todo.

- **Editable description on cards** — When editing an existing todo, a textarea pre-filled with the current description is shown, allowing inline updates.

- **Description in CSV export** — The exported CSV file now includes a `description` column between `todo` and `kanban_board`, preserving description data when exporting.

- **Description in CSV import** — The CSV importer now reads the `description` column (second field) so todos imported from CSV retain their descriptions.

- **API support for description** — The `POST /todos`, `PUT /todos/:id`, and `POST /todos/import` endpoints all accept and persist the `description` field, with validation ensuring it is a string when provided.

### ⚙️ Melhorias & Manutenção

- **Documentação da arquitetura do projeto** — O README foi atualizado com um diagrama de fluxo (Mermaid) que ilustra visualmente a arquitetura do sistema de geração de changelog, além de uma explicação passo a passo do fluxo completo, desde a abertura de um Pull Request até a reescrita automática do CHANGELOG.md.

## 29/06/2026

### 🔒 Login e Segurança

- **Tela de login** — Agora existe uma tela onde você digita seu e-mail e senha para entrar. Só quem tem acesso autorizado consegue usar o quadro de tarefas.

- **Proteção do sistema** — As informações do sistema são protegidas com um token de segurança que dura 24 horas. Se o token vencer, o sistema faz o logout sozinho e volta para a tela de login.

- **Botão Sair** — Você pode clicar em "Sair" para encerrar sua sessão a qualquer momento, e o sistema te leva de volta para a tela de login.

- **Entrada automática** — Se você já fez login antes e o token ainda é válido, o sistema te leva direto para o painel, sem precisar digitar e-mail e senha de novo.

### 📋 Quadro de Tarefas

- **Quadro visual** — A lista de tarefas virou um quadro com três colunas: A Fazer, Fazendo e Pronto. Assim você vê de um jeito fácil o que está pendente, o que está sendo feito e o que já foi concluído.

- **Arraste e solte** — Para mudar uma tarefa de coluna, é só arrastar o cartão com o mouse para o lugar certo.

- **Botões para mover** — Cada cartão também tem setinhas ← e → para mover a tarefa entre as colunas, sem precisar arrastar.

- **Campo de situação** — Cada tarefa mostra em qual etapa ela está (a fazer, fazendo ou pronto), no lugar do antigo "sim/não" de concluído.

- **Funciona no celular** — Em telas menores, o quadro se ajusta sozinho para mostrar uma coluna por vez, facilitando o uso no celular.

### 📁 Importar e Exportar

- **Importar CSV** — Você pode importar várias tarefas de uma vez clicando em "Importar CSV" e selecionando um arquivo. As tarefas são carregadas de uma só vez.

- **Exportar CSV** — Dá para baixar sua lista de tarefas como um arquivo CSV, que abre no Excel ou em outros programas de planilha.

- **Importar e exportar com situação** — Tanto na hora de importar quanto de exportar, o sistema considera em qual coluna do quadro cada tarefa está.

### 🛠️ Melhorias Internas

- **Aplicativo de tarefas** — Foi criado um aplicativo onde você pode adicionar, ver, editar e excluir tarefas.

- **Guarda automática na nuvem** — As tarefas são salvas automaticamente no servidor, então você não perde nada quando fecha a página.

- **Documentação** — O arquivo README foi criado e atualizado com explicações sobre o projeto e como usar.

- **Automação** — Foram criados processos para gerar este histórico de mudanças automaticamente sempre que algo novo for lançado.
