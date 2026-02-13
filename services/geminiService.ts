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

If asked about specific services, you can mention: Coaching, Leadership Development, Ministry Consulting, Workshops, Public Speaking, Corporate Chaplaincy, and Calling & Vocation.
`;

export const getLeadershipInsight = async (prompt: string) => {
  // Use the API key exclusively from the environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        // Removed maxOutputTokens to ensure the AI can complete its full thought without being cut off.
        // Using 'gemini-3-flash-preview' ensures high-speed responses and near-zero cost for low-traffic sites.
      },
    });

    return response.text || "I'm sorry, I couldn't generate an insight at this moment. Please try again.";
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    
    // Friendly error messaging for the user
    if (error.message?.includes('API_KEY_INVALID')) {
      return "The connection to the Formation Guide needs to be configured. Please ensure the API key is correctly set in your environment variables.";
    }
    
    return "The wisdom of the moment is currently unavailable. Please ensure your connection is stable and try again.";
  }
};
