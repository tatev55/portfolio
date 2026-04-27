export const VITE_GEMINI_API_KEY = import.meta.env
  .VITE_GEMINI_API_KEY as string;

export const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta";

export const GEMINI_MODEL =
  (import.meta.env.VITE_GEMINI_MODEL as string | undefined) ||
  "gemini-2.5-flash";
