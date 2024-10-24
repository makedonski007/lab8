const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the Nodejs!');
});

app.listen(3000, () => {
  console.log('Backend server is running on port 3000');
});
