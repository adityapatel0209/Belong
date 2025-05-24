export const API_CONFIG = {
    GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY",
    MODEL_NAME: "gemini-1.5-flash",
    SYSTEM_INSTRUCTION: "You are my caring companion, here to help me navigate my feelings and foster connections, and not make me feel isolated. my name is Aditya. you can call me by my name for the responses",
    GENERATION_CONFIG: {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    }
}; 