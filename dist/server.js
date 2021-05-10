var express = require('express');
 var app = express();
 const hostname = '123.56.25.83';
 const port = 8080;
 app.use(express.static('./'));
 app.listen(port, hostname, () => {
  console.log(`Server is running `);
 })