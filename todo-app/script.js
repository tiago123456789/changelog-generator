const API_BASE = 'http://localhost:3000';
let todos = [];

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

async function fetchTodos() {
  const res = await fetch(`${API_BASE}/todos`);
  const data = await res.json();
  const editingIds = new Set(todos.filter(t => t.editing).map(t => t.id));
  todos = data.map(t => ({ ...t, editing: editingIds.has(t.id) }));
  render();
}

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

async function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  await fetch(`${API_BASE}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  input.value = '';
  await fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_BASE}/todos/${id}`, { method: 'DELETE' });
  await fetchTodos();
}

function startEdit(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.editing = true;
    render();
  }
}

async function saveTodo(id, inputEl) {
  const text = inputEl.value.trim();
  if (!text) return;

  await fetch(`${API_BASE}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  await fetchTodos();
}

function cancelEdit(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.editing = false;
    render();
  }
}

async function toggleDone(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;

  await fetch(`${API_BASE}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done: !todo.done }),
  });
  await fetchTodos();
}

function exportCsv() {
  const now = new Date();
  const y = now.getFullYear();
  const mo = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const h = String(now.getHours()).padStart(2, '0');
  const mi = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const exportedAt = `${y}-${mo}-${d} ${h}:${mi}:${s}`;

  const rows = todos.map(t => `"${t.text.replace(/"/g, '""')}",${exportedAt}`);
  const csv = 'todo,exported_at\n' + rows.join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'todos.csv';
  link.click();
  URL.revokeObjectURL(link.href);
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});
function importCsv() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv';

  input.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function (evt) {
      const content = evt.target.result;
      const lines = content.replace(/^\uFEFF/, '').split('\n');

      if (lines.length < 2) {
        alert('CSV file has no data rows');
        return;
      }

      const texts = [];
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        let text;
        if (line[0] === '"') {
          let j = 1;
          while (j < line.length) {
            if (line[j] === '"') {
              if (j + 1 < line.length && line[j + 1] === '"') {
                j += 2;
              } else {
                text = line.slice(1, j).replace(/""/g, '"');
                break;
              }
            } else {
              j++;
            }
          }
        } else {
          const commaIdx = line.indexOf(',');
          text = commaIdx !== -1 ? line.slice(0, commaIdx) : line;
        }

        if (text && text.trim()) {
          texts.push(text.trim());
        }
      }

      if (!texts.length) {
        alert('No valid todos found in CSV');
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/todos/import`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ texts }),
        });
        if (!res.ok) throw new Error((await res.json()).error || 'Import failed');
        await fetchTodos();
      } catch (err) {
        alert('Import failed: ' + err.message);
      }
    };
    reader.readAsText(file);
  });

  input.click();
}

document.getElementById('export-btn').addEventListener('click', exportCsv);
document.getElementById('import-btn').addEventListener('click', importCsv);

fetchTodos();
