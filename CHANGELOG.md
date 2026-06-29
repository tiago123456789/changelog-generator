# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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