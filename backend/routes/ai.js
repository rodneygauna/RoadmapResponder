import express from "express";
import OpenAI from "openai";
import buildPrompt from "../utils/promptBuilder.js";

const router = express.Router();

// Initialize OpenAI API client
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set in environment variables");
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

router.post("/generate", async (req, res) => {
  const { requestText, template, tone } = req.body;
  const prompt = buildPrompt(requestText, template, tone);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful product manager." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });
    res.json({ response: completion.choices[0].message.content.trim() });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to generate response", detail: err.message });
  }
});

export default router;
