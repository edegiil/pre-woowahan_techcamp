const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.set('trust proxy', true);

app.use(express.static('HTML_CSS'));
app.use(express.static('JS'));

app.get('/shopping-mall-clone', (req, res) => {
  res.status(200).sendFile(__dirname + '/HTML_CSS/index.html');
});

app.get('/tic-tac-toe', (req, res) => {
  res.status(200).sendFile(__dirname + '/JS/index.html');
});

app.all('*', (req, res) => {
  res.status(404).send('없는 페이지입니다.');
});

app.listen(8080, () => {
  console.log('server open!!');
});
