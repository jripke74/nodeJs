const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('In add product middleware');
  res.send('<h1>The "Add Product" page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!');
});

app.listen(3000);