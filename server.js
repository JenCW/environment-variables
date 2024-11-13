require('dotenv').config();
const express = require('express');
const PORT= 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('The server is running!');
});

// adjust the following:
app.listen(PORT, () => {
    console.log('Listening on PORT 3000');
    console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
  });