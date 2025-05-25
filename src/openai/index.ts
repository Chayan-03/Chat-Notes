import { GoogleGenAI } from "@google/genai";
const openai = new GoogleGenAI({ apiKey: process.env.OPENAI_API_KEY });
export default openai;