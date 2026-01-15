import dotenv from 'dotenv'
dotenv.config();
import express, { request, response } from 'express';

import { askWithContext } from './utils/ask.js';
import { storeText } from './utils/store.js';


const app= express();
console.log("api:",process.env.OPENROUTER_API_KEY)
app.use(express.json());
app.post('/ask',async (req,res)=>{
const {question} = req.body;
const answer = await askWithContext(question);
res.json({answer});

})
app.post("/ingest", async (req, res) => {
  const { text, source } = req.body;
  await storeText(text, source);
  res.json({ success: true });
});

app.listen(5000,()=>{
    console.log("app running");
})