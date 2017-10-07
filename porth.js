
// using http server and express application server modules
var http = require('http');
var express = require('express');
var porth = express();

// middleware to handle API GET request
porth.get('/path', function (req, res) {
  console.log('GET request received');
  res.send(" 200 Got your GET request!");
  console.log('GET response sent back!');
});

// middleware to handle static files
porth.use(express.static(__dirname));

// middleware to handle 404
porth.use(function (req, res) {
  console.log('Random API request received');
  res.send(' 404 Please use valid path!');
});

// middleware to handle 500 errors
porth.use(function (err, req, res, next) {
  console.error(err.stack);
  res.send(' 500 Something went wrong on my side!');
});

porth.listen(3000);
console.log('... porth listening on port 3000!');
