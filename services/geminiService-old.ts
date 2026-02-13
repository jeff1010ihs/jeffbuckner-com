import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly experienced leadership coach and spiritual formation expert specializing in the development of men. 
Your philosophy is: "Leadership isn't performance; it is character."
Your advice should be:
1. Grounded in character, humility, and conviction.
2. Biblically informed but professional and accessible.
3. Focused on personal responsibility and faithful obedience rather than hype or emotional manipulation.
4. Direct, thoughtful, and encouraging maturity in Christ.
5. Provide clear, actionable steps for building character and integrity in the home, workplace, and church.

If asked about specific services, you can mention: Coaching, Leadership Development, Ministry Consulting, Workshops, Public Speaking, and Corporate Chaplaincy.
`;

export const getLeadershipInsight = async (prompt: string): Promise<string> => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  if (!apiKey.trim()) {
    return "The Formation Guide needs a Gemini API key to run. Add GEMINI_API_KEY to a .env.local file in the project root (get a key at https://aistudio.google.com/apikey), then restart the dev server with npm run dev.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text ?? "I'm sorry, I couldn't generate an insight at this moment. Please try again.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "The wisdom of the moment is currently unavailable. Check your connection and that GEMINI_API_KEY is set in .env.local, then try again.";
  }
};
