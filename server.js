'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:black;">Java Home App - version-16!!</h1> \n');
>>>>>>> 63c8419089d056ab330d3f964c0a91bcdb6f4890
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
