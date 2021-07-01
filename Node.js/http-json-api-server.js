const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  let result = null;

  if (req.method === 'GET' && req.url.includes('api/parsetime')) {
    const iso = req.url.split('?iso=')[1];
    const time = new Date(iso);
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
  }

  if (req.method === 'GET' && req.url.includes('api/unixtime')) {
    const iso = req.url.split('?iso=')[1];
    const unixtime = new Date(iso).getTime();

    result = {
      unixtime,
    }
  }

  if (result) {
    const json_data = JSON.stringify(result);

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(json_data);
  }
  
});

server.listen(port);
