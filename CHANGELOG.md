# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [2026-06-29T12:00:00Z] - Add Changelog for Custom Finishing Touch PR

### ⚙️ Chores & Maintenance

- Prepended a new timestamped, categorized changelog entry to `CHANGELOG.md` documenting the CodeRabbit changelog finishing touch recipe execution for the custom finishing touch PR requested by @tiago123456789.

## [2026-06-29T12:00:00Z] - Add Custom Finishing Touch Changelog Recipe

### ⚙️ Chores & Maintenance

- Prepended a new timestamped, categorized entry to `CHANGELOG.md` documenting the CodeRabbit changelog finishing touch recipe execution for the custom finishing touch PR requested by @tiago123456789.

## [2026-06-29T12:00:00Z] - Update Changelog for Custom Finishing Touch Recipe

### ⚙️ Chores & Maintenance

- Updated `CHANGELOG.md` by prepending a new timestamped, categorized entry documenting the CodeRabbit changelog finishing touch recipe execution for the custom finishing touch PR.

## [2026-06-29T12:00:00Z] - Add Changelog for Custom Finishing Touch Recipe

### ⚙️ Chores & Maintenance

- Ran the CodeRabbit changelog finishing touch recipe to document the addition of a custom changelog finishing touch, appending a new timestamped, categorized entry to `CHANGELOG.md`.

## [2026-06-29T12:00:00Z] - Add Changelog

### ⚙️ Chores & Maintenance

- Ran the CodeRabbit changelog finishing touch recipe to append a new timestamped, categorized entry to `CHANGELOG.md`, documenting PR changes under the "Add changelog" recipe execution.

## [2026-06-29T12:00:00Z] - Add Changelog for Custom Finishing Touch

### ⚙️ Chores & Maintenance

- Added a new CodeRabbit changelog finishing touch recipe entry to `CHANGELOG.md`, documenting the automation of timestamped, categorized changelog generation (🚀 New Features, 🐛 Bug Fixes, ⚙️ Chores & Maintenance) on each pull request.

## [2026-06-29T12:00:00Z] - Add Changelog Finishing Touch

### ⚙️ Chores & Maintenance

- Added CodeRabbit changelog finishing touch recipe to `CHANGELOG.md`, automating the generation of timestamped, categorized changelog entries (🚀 New Features, 🐛 Bug Fixes, ⚙️ Chores & Maintenance) on each pull request.
- Updated `CHANGELOG.md` entry timestamp to `2026-06-29T12:00:00Z` to align with Keep a Changelog timestamped standards.

## [2026-06-29T12:00:00Z] - Update Changelog Finishing Touch

### ⚙️ Chores & Maintenance

- Updated `CHANGELOG.md` entry timestamp from `2026-06-29T00:00:00Z` to `2026-06-29T12:00:00Z` to align with timestamped Keep a Changelog standards.
- Refined the CodeRabbit changelog custom finishing touch recipe to ensure consistent generation of categorized changelog entries (🚀 New Features, 🐛 Bug Fixes, ⚙️ Chores & Maintenance) on pull requests.

## [2026-06-29T12:00:00Z] - Changelog Custom Finishing Touch

### ⚙️ Chores & Maintenance

- Updated `CHANGELOG.md` entry timestamp from `2026-06-29T00:00:00Z` to `2026-06-29T12:00:00Z` to follow timestamped Keep a Changelog standards.
- Added CodeRabbit changelog custom finishing touch recipe to automate generation of categorized changelog entries (🚀 New Features, 🐛 Bug Fixes, ⚙️ Chores & Maintenance) on pull requests.

## [2026-06-29T12:00:00Z] - Todo Management API

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