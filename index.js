const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet()); // Adds security headers

app.get("/", (req, res) => {
  res.send("Hello, Secure World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
