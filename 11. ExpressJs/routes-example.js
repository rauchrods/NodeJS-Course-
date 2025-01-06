const express = require("express");

const app = express();

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
  res.send("Welcome to home page");
});

//get all products
app.get("/products", (req, res) => {
  res.status(200).json({ products });
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => product.id == id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ product });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
