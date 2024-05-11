import { Message, streamText } from "ai";
import { ollama } from "ollama-ai-provider";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const result = await streamText({
    model: ollama("llama3"),
    system: "You are an AI chat bot. Follow the user's instructions carefully.",
    messages: messages.map(({ role, content }) => {
      switch (role) {
        case "user":
        case "assistant":
          return { role, content };
        default:
          throw new Error(`Unsupported role: ${role}`);
      }
    }),
  });

  return result.toAIStreamResponse();
}
