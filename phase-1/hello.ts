import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

// The SDK reads ANTHROPIC_API_KEY from the environment, which dotenv filled from .env
const client = new Anthropic();

const message = await client.messages.create({
  model: "claude-sonnet-5-5",
  max_tokens: 200,
  messages: [{ role: "user", content: "Say hello to Diego in one sentence." }],
});

// The reply is a list of content blocks; print the text ones
for (const block of message.content) {
  if (block.type === "text") console.log(block.text);
}
