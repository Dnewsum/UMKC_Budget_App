const express = require("express");
const cors = require("cors");
const geminiRoute = require("./routes/gemini");
require("dotenv").config();

const registerRoute = require("./routes/register");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", registerRoute);
app.use("/api", authRoute);
app.use("/api", geminiRoute);

app.listen(5000, () => console.log("✅ Server running on port 5000"));
