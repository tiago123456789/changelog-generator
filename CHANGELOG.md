# Changelog

## 29/06/2026 – 00:11

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:10`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:10

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:09`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:09

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:08`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:08

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:07`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:07

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:06`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:06

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:05`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:05

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:04`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:04

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:03`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the previous changelog automation chore

---

## 29/06/2026 – 00:03

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog finishing touch recipe execution:

  * Added timestamped changelog entry (`29/06/2026 – 00:02`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the changelog automation chore

---

## 29/06/2026 – 00:02

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the changelog automation chore:

  * Added timestamped changelog entry (`29/06/2026 – 00:01`) following Keep a Changelog format
  * Entry covers the update to CHANGELOG.md that documented the CSV Export changelog entry

---

## 29/06/2026 – 00:01

### ⚙️ Chores & Maintenance

* Updated **CHANGELOG.md** to document the CSV Export feature for todos:

  * Added timestamped changelog entry (`29/06/2026 – 00:00`) following Keep a Changelog format
  * Entry covers new "Export CSV" button, file format, timestamp capture, and CSV escaping details

---

## 29/06/2026 – 00:00

### 🚀 New Features

* Added **CSV Export** for todos (`todo-app/`):

  * New "Export CSV" button in the UI triggers a client-side download
  * Exported file (`todos.csv`) includes `todo` and `exported_at` columns
  * Timestamp is captured at the moment of export
  * Proper CSV escaping applied to todo text (double-quote handling)

---

## 29/06/2026

### 🚀 New Features

* Added **Todo App (`todo-app/`)**: a vanilla HTML/CSS/JavaScript SPA for task management.

  * Add new todos via input field (button click or Enter key)
  * Mark todos as completed with strikethrough
  * Edit todos inline with save/cancel actions
  * Delete individual todos

* Added **Todo REST API (`api/`)** with full CRUD support:

  * `POST /todos` — create todo (with validation)
  * `GET /todos` — list all todos
  * `PUT /todos/:id` — update text and/or completion status
  * `DELETE /todos/:id` — remove todo by ID

* Integrated **frontend with backend API**:

  * `fetchTodos()` loads data from `GET /todos` on page load and after mutations
  * `addTodo()` uses `POST /todos`
  * `deleteTodo(id)` uses `DELETE /todos/:id`
  * `saveTodo(id, inputEl)` uses `PUT /todos/:id`
  * `toggleDone(id)` toggles completion via `PUT /todos/:id`

* Added **GitHub Actions + workflow automation**:

  * Auto-triggers `@coderabbitai run changelog` on PR creation/update
  * Introduced versioned workflow to remove manual changelog generation step
  * Documented changelog generation process in repository

---

### ⚙️ Chores & Maintenance

* Enabled **CORS middleware** in Express API to allow cross-origin frontend communication
* Added `cors` (^2.8.6) dependency to `api/package.json`
* Added `express` 4.x API setup with `package.json` and `package-lock.json`
* Added `.gitignore` to `api/` to exclude `node_modules/`
* Updated `.coderabbit.yaml` to include timestamp in changelog entries, enforcing Keep a Changelog format consistency
