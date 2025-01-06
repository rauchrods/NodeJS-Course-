const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log(res);
  res.status(200).json({ msg: "Hello World" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
