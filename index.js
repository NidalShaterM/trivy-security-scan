const express = require("express");
const helmet = require("helmet");
const { exec } = require("child_process"); // 🚨 Command Injection Risk

const app = express();

// 🚨 Disabled security headers (helmet) to make Trivy detect issues
// app.use(helmet()); 

app.get("/", (req, res) => {
  res.send("Hello, Insecure World!");
});

// 🚨 Simulated Command Injection vulnerability
app.get("/exec", (req, res) => {
  const userCommand = req.query.cmd; // Takes input from user
  exec(userCommand, (error, stdout, stderr) => {
    if (error) {
      res.send(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      res.send(`stderr: ${stderr}`);
      return;
    }
    res.send(`stdout: ${stdout}`);
  });
});

// 🚨 Simulated XSS vulnerability (unsanitized user input)
app.get("/xss", (req, res) => {
  const userInput = req.query.input;
  res.send(`<h1>${userInput}</h1>`); // 🚨 No input sanitization
});

// 🚨 Simulated SQL Injection vulnerability (unsafe query construction)
app.get("/sql", (req, res) => {
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = '${userId}'`; // 🚨 Unsafe query concatenation
  res.send(`Executing: ${query}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚨 Insecure Server running on port ${PORT}`);
});
