---
name: create-professional-frontend-pr
description: >-
  Whenever the user says "open a PR" or "create a pull request", analyze git
  changes, relate work to GitHub issues, draft a structured PR description, and
  open the pull request via the GitHub MCP create_pull_request tool (React,
  TypeScript, Ant Design).
---

# Create Professional Frontend PR

## Use when

* The user says **"open a PR"** or **"create a pull request"**.

## Workflow

### 1. Analyze changes

* Use **`git diff`** (and **`git diff --cached`** when there are staged changes) to review the current patch.
* Focus on **React components**, **TypeScript types**, and **Ant Design** UI usage (props, layout, theme tokens, Form/Table/Modal patterns).

### 2. Context gathering

* Resolve **`owner`** and **`repo`** from `git remote get-url origin` (GitHub `owner/repo`).
* Determine the **current local branch** with `git branch --show-current` (this is the PR **`head`**).
* Check for **open GitHub issues** tied to the work: search or list issues (for example via GitHub MCP `search_issues` or `list_issues`) using keywords from the branch name, commit messages, or the apparent task; mention relevant issue numbers in the PR body with `Closes #N` / `Refs #N` when appropriate.

### 3. Generate description

Draft a structured PR **body** with these sections:

* **Summary** — Short overview of what changed and why.
* **Technical details** — Logic and state management (e.g. RTK Query, custom hooks, context), API or data-flow changes.
* **UI/UX** — Ant Design components, layout, styling, accessibility, or visual behavior updates.

### 4. Open the pull request (GitHub MCP)

Call **`create_pull_request`** on the **user-github** MCP server with:

| Parameter | Value |
|-----------|--------|
| **`owner`** | From `origin` remote |
| **`repo`** | From `origin` remote |
| **`title`** | `feat: [Component Name] implementation` or `fix: [Issue Description]` (pick **feat** vs **fix** from the nature of the change) |
| **`body`** | The markdown from step 3 |
| **`head`** | Current local branch name |
| **`base`** | `main`, or `master` if that is the repository default branch (confirm with `git remote show origin` or the repo’s default branch if unsure) |

Optional: set **`draft`: true** if the user asks for a draft PR.

After creation, share the PR link with the user.
