const net = require('net');

const port = process.argv[2];

const server = net.createServer((socket) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).length > 1 || `0${date.getMonth() + 1}`;
  const day = String(date.getDate()).length > 1 || `0${date.getDate()}`;
  const hour = date.getHours();
  const minute = date.getMinutes();

  const result = `${year}-${month}-${day} ${hour}:${minute}\n`;

  socket.end(result);
});

server.listen(port);
