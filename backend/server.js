import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ SQLite connection
let db;
(async () => {
  db = await open({
    filename: "./aim_pro.db", // SQLite DB file
    driver: sqlite3.Database,
  });

  // Create table if not exists
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  console.log("✅ SQLite DB connected & ready");
})();

// ✅ Register user
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    await db.run(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Login user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, "secretkey");
    res.json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Protected profile
app.get("/profile", async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, "secretkey");
    const user = await db.get(
      "SELECT id, username, email FROM users WHERE id = ?",
      [decoded.id]
    );
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// ✅ Gemini Quiz Generator
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/generate-quiz", async (req, res) => {
  const { numQuestions = 5, category = "career guidance" } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Generate ${numQuestions} multiple-choice quiz questions about ${category}.
    Format them strictly as JSON like this:
    [
      {
        "id": "q1",
        "category": "${category}",
        "text": "Question text",
        "options": ["Option A", "Option B", "Option C", "Option D"]
      }
    ]
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    let questions;
    try {
      questions = JSON.parse(text);
    } catch (err) {
      return res.status(500).json({ error: "Failed to parse AI response", raw: text });
    }

    res.json({ questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

// ✅ Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
