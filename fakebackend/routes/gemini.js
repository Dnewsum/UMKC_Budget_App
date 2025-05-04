const express = require("express");
const fetch = require("node-fetch"); // or use global fetch if Node 18+
require("dotenv").config();

const router = express.Router();

router.post("/chat", async (req, res) => {
  const prompt = req.body.prompt;
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );

    const data = await response.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    res.json({ response: reply });
  } catch (error) {
    console.error("Gemini route error:", error);
    res.status(500).json({ error: "Failed to connect to Gemini API" });
  }
});

module.exports = router;
