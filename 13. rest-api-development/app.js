import express from "express";
const app = express();

app.use(express.json());

let books = [
  { id: 1, name: "Book 1" },
  { id: 2, name: "Book 2" },
  { id: 3, name: "Book 3" },
  { id: 4, name: "Book 4" },
  { id: 5, name: "Book 5" },
  { id: 6, name: "Book 6" },
  { id: 7, name: "Book 7" },
  { id: 8, name: "Book 8" },
];

app.get("/", (req, res) => {
  res.status(200).json({ msg: "welcome to bookstore api!!" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ books });
});

app.get("/book/:id", (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }

  res.status(200).json({ book });
});

app.post("/book", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Book name is required" });
  }

  const newBook = { id: books.length + 1, name };

  books = [...books, newBook];

  res.status(201).json({ message: "Book created successfully", book: newBook });
});

app.put("/book/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Book name is required" });
  }

  const book = books.find((book) => book.id == id);

  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }

  book.name = name || book.name;

  res.status(200).json({ message: "Book updated successfully", book });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
