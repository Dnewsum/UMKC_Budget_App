const express = require("express");
const fetch = require("node-fetch"); // or use global fetch if Node 18+
require("dotenv").config();

const router = express.Router();

router.post("/chat", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await fetch("http://localhost:8080/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    const reply = data.reply || "No response from Java service";
    console.log("Java service returned:", data);
    res.json({ response: reply });
  } catch (error) {
    console.error("Error calling Java service:", error);
    res.status(500).json({ error: "Failed to call Java Gemini microservice" });
  }
});

module.exports = router;
