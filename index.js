const http = require('http');

require('dotenv').config();

const port = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server response');
});

server.listen(port, null, () => {
  console.log(`Server running on port ${port}`);
});
