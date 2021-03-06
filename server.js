//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static files
app.use(express.static('app/public'));

// Router
require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/htmlRoutes.js')(app, path);

// Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });