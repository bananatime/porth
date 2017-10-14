// porth testAPIService route module
// route i.e. 'URL/testroute' will be injected by porth.js

var express = require('express');
var route = express.Router();

// middleware to handle API request monitoring
route.use(function (req, res, next) {
  console.log('New API request received for testAPIService at ' + Date.now());
  next(); // process the request
});

// handle GET API request for URL/testroute
route.get('/', function (req, res) {
  console.log('GET request received for /testroute');
  res.send(" 200 Got your GET request for URL/testroute!");
  console.log('GET response sent back!');
});

// export route
module.exports = route;