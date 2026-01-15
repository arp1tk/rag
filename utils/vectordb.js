import { ChromaClient } from "chromadb";

const client = new ChromaClient({
  host: "localhost",
  port: 8000,
  ssl: false
});

export const colllections = await client.getOrCreateCollection({
    name:"base"
})

