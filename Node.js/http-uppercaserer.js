const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      const result = body.toUpperCase();
      res.end(result);
    });
  }
});

server.listen(port);
