const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || '3030';
const IP = process.env.IP || 'localhost';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src')));

app.listen(PORT, () => {
  console.log('listening on port ', PORT)
});