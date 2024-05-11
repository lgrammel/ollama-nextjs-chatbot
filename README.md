# Next.js, Vercel AI SDK & Ollama starter

This starter example shows how to use [Next.js](https://nextjs.org/), the [Vercel AI SDK](https://sdk.vercel.ai/docs), [Ollama](https://ollama.ai/) and the [Ollama AI Provider](https://github.com/sgomez/ollama-ai-provider) to create a ChatGPT-like AI-powered streaming chat bot.

## Setup

1. Install [Ollama](https://ollama.ai/) on your machine.
1. Pull the model: `ollama pull llama3` ([reference](https://ollama.ai/library/llama3))
1. Clone the repository: `git clone https://github.com/lgrammel/ollama-nextjs-starter.git`
1. Install dependencies: `npm install`
1. Start the development server: `npm run dev`
1. Go to http://localhost:3000/
1. Code: `app/api/chat/route.ts` and `app/page.tsx`
