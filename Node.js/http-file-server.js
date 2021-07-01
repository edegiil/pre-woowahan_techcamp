const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  const stream = fs.createReadStream(path);
  stream.pipe(res);
});

server.listen(port);
