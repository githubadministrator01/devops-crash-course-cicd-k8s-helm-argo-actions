const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Simple API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js API!" });
});

app.post("/api/data", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}! Your data was received.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
