export type GeminiRole = "user" | "model";

export type GeminiGenerateContentRequest = {
  contents: Array<{
    role?: GeminiRole;
    parts: Array<{ text: string }>;
  }>;
};

export type GeminiGenerateContentResponse = {
  candidates?: Array<{
    content?: {
      role?: GeminiRole;
      parts?: Array<{ text?: string }>;
    };
  }>;
  error?: {
    message?: string;
  };
};

