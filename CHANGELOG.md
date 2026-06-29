# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [2026-06-29T00:00:00Z] - Todo Management API

### 🚀 New Features

- Added `api/` — a Node.js/Express REST API for managing todos.
  - `POST /todos` — create a new todo item with text validation.
  - `GET /todos` — retrieve the full list of todos.
  - `PUT /todos/:id` — update a todo's text and/or completion status with input validation.
  - `DELETE /todos/:id` — remove a todo by ID.

### ⚙️ Chores & Maintenance

- Added `api/package.json` and `api/package-lock.json` with Express 4.x dependency.
- Added `api/.gitignore` to exclude `node_modules/` from version control.

## [2026-06-29]

### ⚙️ Chores & Maintenance

- Updated `.coderabbit.yaml` finishing touch recipe to include date and time on generated changelog entries, ensuring changelog entries follow timestamped Keep a Changelog standards.

## [Unreleased]

### 🚀 New Features

- Added Todo App (`todo-app/`): a vanilla HTML/CSS/JavaScript single-page application for managing tasks.
  - Add new todos via an input field (button click or Enter key).
  - Mark todos as complete by clicking on their text (strikethrough styling applied).
  - Edit existing todo text inline with save and cancel controls.
  - Delete individual todos from the list.
- Documented changelog generation workflow: trigger changelog creation by adding `@coderabbitai run changelog` comment when opening a PR.
- Added Version 2 workflow: GitHub Actions pipeline automatically posts the `@coderabbitai run changelog` comment on PR creation or update, removing the need for manual intervention.