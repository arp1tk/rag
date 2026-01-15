import createEmbedding from "./embedding.js";
import { colllections } from "./vectordb.js";

export default async function searchSimilar(query, topK=5) {

   const queryEmbedding = await createEmbedding(query);
   const result= await colllections.query({
    queryEmbeddings:[queryEmbedding],
    nResults:topK
   }) 
return result.documents[0];    
}