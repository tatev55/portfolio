import axios from "axios";
import { GEMINI_API_URL, GEMINI_MODEL, VITE_GEMINI_API_KEY } from "./const";
import type {
  GeminiGenerateContentRequest,
  GeminiGenerateContentResponse,
} from "./types";

export const askGemini = async (prompt: string): Promise<string> => {
  if (!VITE_GEMINI_API_KEY) {
    throw new Error(
      "Missing VITE_GEMINI_API_KEY. Add it to .env and restart the dev server.",
    );
  }

  const body: GeminiGenerateContentRequest = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  try {
    const response = await axios.post<GeminiGenerateContentResponse>(
      `${GEMINI_API_URL}/models/${GEMINI_MODEL}:generateContent`,
      body,
      {
        params: { key: VITE_GEMINI_API_KEY },
        headers: { "Content-Type": "application/json" },
      },
    );

    const text =
      response.data.candidates?.[0]?.content?.parts
        ?.map((p) => p.text)
        .filter(Boolean)
        .join("") || "";

    if (!text.trim()) {
      const apiMsg = response.data.error?.message;
      throw new Error(apiMsg || "Empty response from Gemini.");
    }

    return text;
  } catch (err: unknown) {
    const message =
      axios.isAxiosError(err) ? err.response?.data?.error?.message : undefined;
    throw new Error(message || "Gemini request failed.", { cause: err });
  }
};
