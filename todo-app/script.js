const todos = [];
let nextId = 1;

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function render() {
  list.innerHTML = '';

  for (const todo of todos) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = todo.id;

    if (todo.editing) {
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.className = 'todo-edit-input';
      editInput.value = todo.text;

      const saveBtn = document.createElement('button');
      saveBtn.className = 'btn btn-save';
      saveBtn.textContent = 'Save';
      saveBtn.addEventListener('click', () => saveTodo(todo.id, editInput));

      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'btn btn-cancel';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', () => cancelEdit(todo.id));

      li.append(editInput, saveBtn, cancelBtn);
    } else {
      const span = document.createElement('span');
      span.className = 'todo-text' + (todo.done ? ' done' : '');
      span.textContent = todo.text;
      span.addEventListener('click', () => toggleDone(todo.id));

      const editBtn = document.createElement('button');
      editBtn.className = 'btn btn-edit';
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => startEdit(todo.id));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-delete';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

      li.append(span, editBtn, deleteBtn);
    }

    list.appendChild(li);
  }
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  todos.push({ id: nextId++, text, done: false, editing: false });
  input.value = '';
  render();
}

function deleteTodo(id) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx !== -1) {
    todos.splice(idx, 1);
    render();
  }
}

function startEdit(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.editing = true;
    render();
  }
}

function saveTodo(id, inputEl) {
  const text = inputEl.value.trim();
  if (!text) return;

  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.text = text;
    todo.editing = false;
    render();
  }
}

function cancelEdit(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.editing = false;
    render();
  }
}

function toggleDone(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.done = !todo.done;
    render();
  }
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});

render();
