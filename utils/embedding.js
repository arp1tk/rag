import axios from "axios";


console.log("open",process.env.JINA_API)
export default async function createEmbedding(text) {
    const jina = axios.create({
  baseURL: "https://api.jina.ai/v1",
  headers: {
    Authorization: `Bearer ${process.env.JINA_API}`,
    "Content-Type": "application/json"
  }
});
  const res = await jina.post("/embeddings", {
    model: "jina-embeddings-v2-base-en",
    input: [text]
  });
console.log(res.data.data[0].embedding)
  return res.data.data[0].embedding;
}
