const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken"); // ✅ Add this
const db = require("../db");

const router = express.Router();

router.post("/register", async (req, res) => {
  const {
    name,
    email,
    password,
    login_source = "web",
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();
    const loginId = uuidv4();
    const createdAt = new Date();

    await db.execute(
      `INSERT INTO users (id, full_name, email, created_at)
       VALUES (?, ?, ?, ?)`,
      [userId, name, email, createdAt]
    );

    const fields = ["id", "email", "password", "user_id", "created_at"];
    const values = [loginId, email, hashedPassword, userId, createdAt];

    if (name) {
      fields.push("username");
      values.push(name);
    }

    if (login_source) {
      fields.push("login_source");
      values.push(login_source);
    }

    const placeholders = fields.map(() => "?").join(", ");
    const sql = `INSERT INTO logins (${fields.join(", ")}) VALUES (${placeholders})`;

    await db.execute(sql, values);

    // ✅ Generate a JWT token like on login
    const token = jwt.sign(
      {
        email,
        user_id: userId,
        username: name,
        full_name: name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token }); // ✅ Send the token to the frontend
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error during registration" });
  }
});

module.exports = router;
// This code defines a registration route for a web application using Express.js. It handles user registration by hashing the password, storing user information in a MySQL database, and generating a JWT token for authentication. The token is sent back to the client upon successful registration.
// The code uses bcrypt for password hashing, uuid for generating unique IDs, and mysql2 for database interactions. It also includes error handling for missing fields and server errors.