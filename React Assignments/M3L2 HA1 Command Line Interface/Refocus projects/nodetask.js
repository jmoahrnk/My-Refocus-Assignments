const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Fibonacci Sequence: ${fibo.toString()}\n John Mark Mariano`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
