import getOpenRouterClient from "./openRouter.js";
import  searchSimilar  from "./search.js";

export async function askWithContext(question) {
  const contextChunks = await searchSimilar(question);

  const context = contextChunks.join("\n");
const openrouter = getOpenRouterClient();
  const response = await openrouter.post("/chat/completions", {
    model: "mistralai/mistral-7b-instruct:free",
    messages: [
      {
        role: "system",
        content: "Answer only using the provided context."
      },
      {
        role: "user",
        content: `Context:\n${context}\n\nQuestion:\n${question}`
      }
    ],
    temperature: 0.3
  });

  return response.data.choices[0].message.content;
}
