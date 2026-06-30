# Histórico de Mudanças

## 30/06/2026

### 🚀 Novas Funções

- **Descrição nas tarefas** — Agora você pode colocar uma descrição em cada tarefa na hora de criar ou editar. A descrição aparece no cartão, bem abaixo do título, com uma letra menor e mais suave.

- **Campo de descrição na tela** — Ao lado do campo onde você digita o nome da tarefa, agora tem um espaço maior (textarea) para escrever uma descrição se quiser.

- **Descrição pode ser editada** — Quando você edita uma tarefa que já existe, aparece um campo com a descrição atual para você alterar.

- **Descrição no arquivo de exportação** — Na hora de exportar os dados para CSV (planilha), a descrição também é incluída, entre o nome da tarefa e o quadro.

- **Descrição na importação** — Quando você importa um arquivo CSV, o sistema também lê a coluna de descrição, então nada se perde.

- **Descrição na API** — Tudo que você envia ou recebe do servidor também passa a incluir a descrição, sem complicação.

### ⚙️ Melhorias e Ajustes

- **Explicação visual do projeto** — O README foi atualizado com um diagrama que mostra como o sistema funciona, com desenhos e explicações passo a passo, desde a abertura de um Pull Request até a atualização automática deste histórico.

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
