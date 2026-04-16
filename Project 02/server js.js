server js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // serve your HTML

// Fake user data (replace with DB in real app)
const USER = {
  email: "test@example.org",
  password: "password234"
};

// Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    res.send(`<h2>✅ Login successful! Welcome, ${email}.</h2>`);
  } else {
    res.send("<h2>❌ Invalid email or password. Try again.</h2>");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

