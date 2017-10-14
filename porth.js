
// using express application server module
var express = require('express');
var porth = express();

// using porth testAPIService module
var testAPIService = require ('./testAPIService.js');

// attach URL/testroute to testAPIService
porth.use('/testroute', testAPIService);

// middleware to handle static files
porth.use(express.static(__dirname));

// middleware to handle 404
porth.use('*', function (req, res) {
  console.log('Random API request received');
  res.send(' 404 Invalid URL!');
});

// middleware to handle 500 errors
porth.use(function (err, req, res, next) {
  console.error(err.stack);
  res.send(' 500 Something went wrong on my side!');
});

porth.listen(3000);
console.log('... porth listening on port 3000!');
