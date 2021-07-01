const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  let data = [];
  res.on('err', console.error);
  res.on('data', (v) => data.push(v));
  res.on('end', () => {
    const string = a.join('');
    console.log(string.length);
    console.log(string);
  });
});
