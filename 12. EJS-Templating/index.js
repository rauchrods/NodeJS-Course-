const express = require("express");
const path = require("path");
const { title } = require("process");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },

  {
    id: 2,
    name: "Mobile",
    price: 500,
  },
  {
    id: 3,
    name: "Tablet",
    price: 300,
  },
];

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
