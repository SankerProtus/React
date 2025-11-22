import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['DB_USER', 'DB_HOST', 'DB_NAME', 'DB_PASSWORD', 'DB_PORT'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.error('Missing required environment variables:', missingEnvVars);
    process.exit(1);
}

const PORT = process.env.PORT || 5000;

const { Pool } = pg;
const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  } else {
    console.log("Connected to the database.");
  }
});

db.on("error", (err) => {
  console.error("Unexpected database error:", err);
});

app.post("/api/auth/register", async (req, res) => {
  const username =
    req.body && req.body.username ? String(req.body.username).trim() : null;
  const email =
    req.body && req.body.email ? String(req.body.email).trim() : null;
  const password =
    req.body && req.body.password ? String(req.body.password).trim() : null;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, Email and password are required." });
  }

  try {
    const response = await db.query(
      "SELECT * FROM users WHERE LOWER(email) = $1",
      [email.toLowerCase()]
    );

    if (response.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertResult = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
      [username, email, hashedPassword]
    );

    const newUser = insertResult.rows[0];
    res.status(201).json({
      message: "Registered successfully.",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ message: "Error registering user. Please try again later." });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const email =
    req.body && req.body.email ? String(req.body.email).trim() : null;
  const password =
    req.body && req.body.password ? String(req.body.password).trim() : null;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    };

    const response = await db.query(
      "SELECT * from users WHERE LOWER(email) = $1",
      [email.toLowerCase()]
    );

    if (response.rows.length === 0) {
      return res.status(400).json({
        message: "Invalid email or password.",
        redirect: "/api/auth/register",
      });
    };
    const user = response.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
        redirect: "/api/auth/register",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res
      .status(500)
      .json({ message: "Error loggin in user. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
