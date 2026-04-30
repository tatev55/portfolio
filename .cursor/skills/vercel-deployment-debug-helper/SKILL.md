---
name: vercel-deployment-debug-helper
description: Help debug Vercel deployment issues for Vite + React + TypeScript projects, focusing on environment variables (VITE_ prefix), missing API keys, and cases where the app works locally but fails after deployment. Use when a user reports build or runtime errors on Vercel.
---

# Vercel Deployment Debug Helper

## Purpose

Help debug Vercel deployment issues for Vite + React + TypeScript projects.

The skill should focus on:

* Environment variables issues (especially VITE_ prefix)
* Cases where app works locally but fails on Vercel
* Missing or undefined API keys in production
* Build or runtime errors after deployment

## Rules

* Always check Vercel environment variables first
* Verify correct naming (VITE_ prefix for Vite projects)
* Distinguish between local (.env.local) and production (Vercel dashboard)
* Suggest redeploy after any env changes
* Prefer step-by-step debugging instead of code changes
* Explain issues in simple language

## Debugging order (follow exactly)

When a user reports a deployment issue, guide debugging in this order:

1. Check environment variables in Vercel
2. Verify variable names and prefixes
3. Check import.meta.env usage
4. Confirm redeployment was done
5. Identify mismatch between local and production

## Step-by-step workflow (what to ask and what to check)

### 1) Check environment variables in Vercel

- Ask the user to open the Vercel project and confirm the variables exist in the dashboard.
- Confirm **which environments** they are set for (Development / Preview / Production).
- Ask whether the failing deployment is **Preview** or **Production** (they often differ).

### 2) Verify variable names and prefixes (Vite-specific)

- For Vite client-side code, only variables with the **`VITE_`** prefix are exposed to `import.meta.env`.
- Common failure: variable exists as `GEMINI_API_KEY` (works in server code) but is referenced as `import.meta.env.VITE_GEMINI_API_KEY` (undefined in the browser).
- If the user is unsure, have them list the **exact** env var names in Vercel and the **exact** names used in code.

### 3) Check `import.meta.env` usage

- Confirm the code reads env vars from `import.meta.env` (not `process.env` in the browser).
- Confirm they are not destructuring `import.meta.env` in a way that loses typing or leads to undefined assumptions.
- If the app crashes at runtime, ask for the **first runtime stack trace line** and look for `.env` / `import.meta.env` / undefined access.

### 4) Confirm a redeploy was done after env changes

- Vercel environment variable changes do **not** affect an already-built deployment.
- After any env change, instruct: **redeploy** (or create a new deployment) and then re-test.

### 5) Identify mismatch between local and production

- Local often uses `.env.local` (and it may contain values not present on Vercel).
- Ask the user to compare:
  - what’s in `.env.local`
  - what’s in Vercel dashboard (same variable names, correct environments)
  - what the code expects (`import.meta.env.VITE_...`)
- If it works locally but fails on Vercel, assume **env mismatch first** until proven otherwise.

## What to request from the user (minimum info)

- The **exact Vercel error** (build log line or runtime console error)
- Which deployment type fails (**Preview** vs **Production**)
- The **exact env var names** set in Vercel (no secrets, just names)
- The **exact env var keys** referenced in code (again, keys only)

