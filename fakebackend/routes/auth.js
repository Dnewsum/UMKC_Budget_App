const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.execute(
      `SELECT logins.*, users.full_name 
       FROM logins
       JOIN users ON logins.user_id = users.id
       WHERE logins.email = ?`,
      [email]
    );

    if (rows.length === 0 || rows[0].password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const login = rows[0];

    const token = jwt.sign(
      {
        email: login.email,
        user_id: login.user_id,
        username: login.username,
        full_name: login.full_name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
