import express from "express";
import { Configuration, OpenAIApi } from "openai";
import buildPrompt from "../utils/promptBuilder.js";

const router = express.Router();
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

router.post("/generate", async (req, res) => {
  const { requestText, template, tone } = req.body;
  const prompt = buildPrompt(requestText, template, tone);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful product manager." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });
    res.json({ response: completion.data.choices[0].message.content.trim() });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to generate response", detail: err.message });
  }
});

export default router;
