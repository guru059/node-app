'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:blue;">Java Home App - version-5!!</h1> \n');
>>>>>>> 3058fd6c8b9c777da99aafa52213772c3c8c6efe
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
