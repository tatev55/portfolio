name: gemini-api-helper
description: Generate clean Gemini API integrations for Vite + React + TypeScript using axios and environment variables.

# Gemini API Helper

## Use when

* Adding Gemini API to a Vite React project
* Refactoring Gemini request logic
* Creating reusable text generation helpers

## Rules

* Use axios for requests
* Read API key from import.meta.env
* Use VITE_ prefix
* Validate missing API key
* Use async/await
* Wrap requests in try/catch
* Return parsed response text
* Throw descriptive errors
* Keep implementation modular
* Use TypeScript types

## Example

```ts
const text = await askGemini("Explain React hooks");
```

