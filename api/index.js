import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const JWT_SECRET = 'chave-secreta-todo-app';

app.use(cors());
app.use(express.json());

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  try {
    const token = header.split(' ')[1];
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@gmail.com' && password === '123') {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '24h' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Credenciais inválidas' });
});

const todos = [];
let nextId = 1;

const VALID_STATUSES = ['todo', 'in_progress', 'done'];

app.post('/todos', authMiddleware, (req, res) => {
  const { text, description } = req.body;
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'text is required' });
  }
  const todo = {
    id: nextId++,
    text: text.trim(),
    description: description && typeof description === 'string' ? description.trim() : '',
    status: 'todo',
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.post('/todos/import', authMiddleware, (req, res) => {
  const { items } = req.body;
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items must be a non-empty array' });
  }
  const created = [];
  for (const item of items) {
    if (item && typeof item.text === 'string' && item.text.trim()) {
      const status = VALID_STATUSES.includes(item.status) ? item.status : 'todo';
      created.push({
        id: nextId++,
        text: item.text.trim(),
        description: item.description && typeof item.description === 'string' ? item.description.trim() : '',
        status,
      });
    }
  }
  if (created.length === 0) {
    return res.status(400).json({ error: 'no valid items provided' });
  }
  todos.push(...created);
  res.status(201).json(created);
});

app.get('/todos', authMiddleware, (_req, res) => {
  res.json(todos);
});

app.put('/todos/:id', authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'todo not found' });
  }
  const { text, status, description } = req.body;
  if (text !== undefined) {
    if (typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'text must be a non-empty string' });
    }
    todo.text = text.trim();
  }
  if (status !== undefined) {
    if (!VALID_STATUSES.includes(status)) {
      return res.status(400).json({ error: 'status must be todo, in_progress, or done' });
    }
    todo.status = status;
  }
  if (description !== undefined) {
    if (typeof description !== 'string') {
      return res.status(400).json({ error: 'description must be a string' });
    }
    todo.description = description.trim();
  }
  res.json(todo);
});

app.delete('/todos/:id', authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: 'todo not found' });
  }
  todos.splice(idx, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Todo API running at http://localhost:${PORT}`);
});
