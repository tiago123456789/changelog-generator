const API_BASE = 'http://localhost:3000';
let todos = [];
let token = localStorage.getItem('token');

function authHeaders() {
  return token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

const input = document.getElementById('todo-input');
const descriptionInput = document.getElementById('todo-description');
const addBtn = document.getElementById('add-btn');
const columnBodies = {
  todo: document.getElementById('column-todo'),
  in_progress: document.getElementById('column-in_progress'),
  done: document.getElementById('column-done'),
};

const STATUS_ORDER = ['todo', 'in_progress', 'done'];

function getNextStatus(current) {
  const idx = STATUS_ORDER.indexOf(current);
  return idx < STATUS_ORDER.length - 1 ? STATUS_ORDER[idx + 1] : current;
}

function getPrevStatus(current) {
  const idx = STATUS_ORDER.indexOf(current);
  return idx > 0 ? STATUS_ORDER[idx - 1] : current;
}

async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Falha no login');
  }
  const data = await res.json();
  token = data.token;
  localStorage.setItem('token', token);
}

function logout() {
  token = null;
  localStorage.removeItem('token');
}

function showAdminPage() {
  document.getElementById('login-page').classList.add('hidden');
  document.getElementById('admin-page').classList.remove('hidden');
  history.pushState(null, '', '/admin');
  fetchTodos();
}

function showLoginPage() {
  document.getElementById('login-page').classList.remove('hidden');
  document.getElementById('admin-page').classList.add('hidden');
  history.pushState(null, '', '/');
}

document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errorEl = document.getElementById('login-error');
  errorEl.classList.add('hidden');
  if (!email || !password) {
    errorEl.textContent = 'Preencha email e senha';
    errorEl.classList.remove('hidden');
    return;
  }
  try {
    await login(email, password);
    showAdminPage();
  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.classList.remove('hidden');
  }
});

document.getElementById('login-email').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('login-btn').click();
});
document.getElementById('login-password').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('login-btn').click();
});

document.getElementById('logout-btn').addEventListener('click', () => {
  logout();
  showLoginPage();
});

if (token) {
  showAdminPage();
} else {
  showLoginPage();
}

async function fetchTodos() {
  const res = await fetch(`${API_BASE}/todos`, { headers: authHeaders() });
  if (res.status === 401) { logout(); showLoginPage(); return; }
  const data = await res.json();
  const editingIds = new Set(todos.filter(t => t.editing).map(t => t.id));
  todos = data.map(t => ({ ...t, editing: editingIds.has(t.id) }));
  render();
}

function render() {
  for (const body of Object.values(columnBodies)) {
    body.innerHTML = '';
  }

  for (const todo of todos) {
    const body = columnBodies[todo.status];
    if (!body) continue;

    const card = document.createElement('div');
    card.className = 'kanban-card';
    card.dataset.id = todo.id;
    card.draggable = true;

    if (todo.editing) {
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.className = 'card-edit-input';
      editInput.value = todo.text;

      const editDesc = document.createElement('textarea');
      editDesc.className = 'card-edit-textarea';
      editDesc.rows = 2;
      editDesc.placeholder = 'Description (optional)';
      editDesc.value = todo.description || '';

      const saveBtn = document.createElement('button');
      saveBtn.className = 'btn btn-save';
      saveBtn.textContent = 'Save';
      saveBtn.addEventListener('click', () => saveTodo(todo.id, editInput, editDesc));

      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'btn btn-cancel';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', () => cancelEdit(todo.id));

      card.append(editInput, editDesc, saveBtn, cancelBtn);
    } else {
      const textSpan = document.createElement('span');
      textSpan.className = 'card-text';
      textSpan.textContent = todo.text;

      if (todo.description) {
        const descSpan = document.createElement('span');
        descSpan.className = 'card-description';
        descSpan.textContent = todo.description;
        card.appendChild(descSpan);
      }

      const actions = document.createElement('div');
      actions.className = 'card-actions';

      const editBtn = document.createElement('button');
      editBtn.className = 'btn btn-edit';
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => startEdit(todo.id));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-delete';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

      actions.append(editBtn, deleteBtn);

      const moveBtns = document.createElement('div');
      moveBtns.className = 'card-move';

      if (todo.status !== 'todo') {
        const leftBtn = document.createElement('button');
        leftBtn.className = 'btn btn-move';
        leftBtn.textContent = '←';
        leftBtn.addEventListener('click', () => moveTask(todo.id, getPrevStatus(todo.status)));
        moveBtns.appendChild(leftBtn);
      }
      if (todo.status !== 'done') {
        const rightBtn = document.createElement('button');
        rightBtn.className = 'btn btn-move';
        rightBtn.textContent = '→';
        rightBtn.addEventListener('click', () => moveTask(todo.id, getNextStatus(todo.status)));
        moveBtns.appendChild(rightBtn);
      }

      const footer = document.createElement('div');
      footer.className = 'card-footer';
      footer.append(actions, moveBtns);

      card.append(textSpan, footer);
    }

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', todo.id);
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      document.querySelectorAll('.column').forEach(col => col.classList.remove('drag-over'));
    });

    body.appendChild(card);
  }
}

async function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  const description = descriptionInput.value.trim();

  await fetch(`${API_BASE}/todos`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ text, description }),
  });
  input.value = '';
  descriptionInput.value = '';
  await fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_BASE}/todos/${id}`, { method: 'DELETE', headers: authHeaders() });
  await fetchTodos();
}

async function moveTask(id, newStatus) {
  await fetch(`${API_BASE}/todos/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ status: newStatus }),
  });
  await fetchTodos();
}

function startEdit(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.editing = true;
    render();
  }
}

async function saveTodo(id, inputEl, descEl) {
  const text = inputEl.value.trim();
  if (!text) return;
  const description = descEl ? descEl.value.trim() : undefined;

  await fetch(`${API_BASE}/todos/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ text, description }),
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

function exportCsv() {
  const now = new Date();
  const y = now.getFullYear();
  const mo = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const h = String(now.getHours()).padStart(2, '0');
  const mi = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const exportedAt = `${y}-${mo}-${d} ${h}:${mi}:${s}`;

  const rows = todos.map(t => {
    const text = `"${t.text.replace(/"/g, '""')}"`;
    const description = `"${(t.description || '').replace(/"/g, '""')}"`;
    const status = `"${t.status}"`;
    return `${text},${description},${status},${exportedAt}`;
  });
  const csv = 'todo,description,kanban_board,exported_at\n' + rows.join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'todos.csv';
  link.click();
  URL.revokeObjectURL(link.href);
}

function parseCsvFields(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        fields.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  fields.push(current);
  return fields;
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});

document.querySelectorAll('.column').forEach(col => {
  col.addEventListener('dragover', (e) => {
    e.preventDefault();
    col.classList.add('drag-over');
  });
  col.addEventListener('dragleave', () => {
    col.classList.remove('drag-over');
  });
  col.addEventListener('drop', (e) => {
    e.preventDefault();
    col.classList.remove('drag-over');
    const id = Number(e.dataTransfer.getData('text/plain'));
    const newStatus = col.dataset.status;
    if (id && newStatus) {
      moveTask(id, newStatus);
    }
  });
});

document.getElementById('export-btn').addEventListener('click', exportCsv);
document.getElementById('import-btn').addEventListener('click', importCsv);

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

      const items = [];
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const fields = parseCsvFields(line);
        if (fields.length === 0) continue;

        const text = fields[0].trim();
        if (!text) continue;

        let description = '';
        if (fields.length >= 2 && fields[1].trim()) {
          description = fields[1].trim();
        }

        let status = 'todo';
        if (fields.length >= 3 && fields[2].trim()) {
          const s = fields[2].trim().toLowerCase();
          if (['todo', 'in_progress', 'done'].includes(s)) {
            status = s;
          }
        }

        items.push({ text, description, status });
      }

      if (!items.length) {
        alert('No valid todos found in CSV');
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/todos/import`, {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ items }),
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
