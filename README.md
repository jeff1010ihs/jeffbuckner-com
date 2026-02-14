<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1yoagLOd_tqTPKjUfI_ewIlXHU_6ULBc1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Get a Gemini API key at [Google AI Studio](https://aistudio.google.com/apikey), then create a `.env.local` file in the project root with: `GEMINI_API_KEY=your_key_here`
3. Run the app:
   `npm run dev`

## Deploy to Vercel

The AI chat calls the Gemini API via a serverless function so the key never runs in the browser. For deployment to work:

1. In the [Vercel dashboard](https://vercel.com/dashboard), open your project → **Settings** → **Environment Variables**.
2. Add **`GEMINI_API_KEY`** with your Gemini API key value (same as in `.env.local`).
3. Redeploy. The `/api/insight` route will use this key on the server.
