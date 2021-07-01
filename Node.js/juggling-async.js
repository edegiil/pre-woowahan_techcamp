const http = require('http');

const urls = process.argv.slice(2);

const getData = (url) => new Promise((resolve, reject) => {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    let data = [];
    res.on('err', reject);
    res.on('data', (v) => data.push(v));
    res.on('end', () => {
      const string = data.join('');
      console.log(string);
      resolve();
    });
  });
});

async function main() {
  await getData(urls[0]);
  await getData(urls[1]);
  await getData(urls[2]);
}

main();
