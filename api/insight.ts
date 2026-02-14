import { GoogleGenAI } from '@google/genai';

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

export default async function handler(
  req: { method?: string; body?: unknown },
  res: { setHeader: (k: string, v: string) => void; status: (n: number) => { json: (o: object) => void } }
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not set');
    return res.status(500).json({
      error: 'Server configuration error',
      message: 'The connection to the Formation Guide needs to be configured. Please ensure GEMINI_API_KEY is set in Vercel environment variables.',
    });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const prompt = (body as { prompt?: string } | null)?.prompt;
  if (typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'Missing or invalid prompt' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt.trim(),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    const text = response.text ?? "I'm sorry, I couldn't generate an insight at this moment. Please try again.";
    return res.status(200).json({ text });
  } catch (error: unknown) {
    console.error('Error calling Gemini API:', error);
    const message = error instanceof Error ? error.message : '';
    if (message.includes('API_KEY_INVALID')) {
      return res.status(500).json({
        error: 'Configuration error',
        message: 'The connection to the Formation Guide needs to be configured. Please ensure the API key is correct in your environment variables.',
      });
    }
    return res.status(500).json({
      error: 'Service unavailable',
      message: "The wisdom of the moment is currently unavailable. Please ensure your connection is stable and try again.",
    });
  }
}
