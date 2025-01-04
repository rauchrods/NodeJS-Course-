const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });
  if (url === "/") {
    res.end("<h1>Hello World!!!</h1>");
  } else {
    res.end("<h1>Not in the root URl</h1>");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
