const express = require("express");

const app = express();

const myMiddleware = (req, res, next) => {
  console.log("Middleware called");
  next();
};

app.get("/", myMiddleware, (req, res) => {
  res.send("home page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});