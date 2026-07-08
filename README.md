<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/70eedf98-f2fc-4278-9648-762b28b4325a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Netlify

The repo includes a [netlify.toml](netlify.toml) with the build settings, SPA
fallback redirect, and the same caching/security headers used on Firebase
Hosting, so no manual configuration is needed:

1. In Netlify, create a new site from this Git repository.
2. Netlify picks up the build command (`npm run build`) and publish directory
   (`dist`) from `netlify.toml` automatically.
3. If you use the Gemini API, add `GEMINI_API_KEY` under **Site settings →
   Environment variables** (it is injected at build time by Vite).

Deploying to Firebase Hosting (`npm run deploy`) continues to work unchanged.
