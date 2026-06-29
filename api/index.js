import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const todos = [];
let nextId = 1;

const VALID_STATUSES = ['todo', 'in_progress', 'done'];

app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'text is required' });
  }
  const todo = { id: nextId++, text: text.trim(), status: 'todo' };
  todos.push(todo);
  res.status(201).json(todo);
});

app.post('/todos/import', (req, res) => {
  const { items } = req.body;
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items must be a non-empty array' });
  }
  const created = [];
  for (const item of items) {
    if (item && typeof item.text === 'string' && item.text.trim()) {
      const status = VALID_STATUSES.includes(item.status) ? item.status : 'todo';
      created.push({ id: nextId++, text: item.text.trim(), status });
    }
  }
  if (created.length === 0) {
    return res.status(400).json({ error: 'no valid items provided' });
  }
  todos.push(...created);
  res.status(201).json(created);
});

app.get('/todos', (_req, res) => {
  res.json(todos);
});

app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'todo not found' });
  }
  const { text, status } = req.body;
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
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
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
