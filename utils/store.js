import createEmbedding from "./embedding.js";
import { colllections } from "./vectordb.js";
import { v4 as uuidv4 } from "uuid";


function chunkText(text,size = 500){
    const chunks =[];
    for(let i= 0 ; i< text.length ; i+= size){
        chunks.push(text.slice(i,i+size))
    }
    return chunks;
}

export async function storeText(text,source = manual){
    const chunks = chunkText(text);
console.log("open",process.env.JINA_API)
    for(const chunk of chunks){
        const embedding = await createEmbedding(chunk);

        await colllections.add({
            ids:[uuidv4()],
            documents:[chunk],
            embeddings: [embedding],
            metadatas:[{source}],
        })
    }
} 