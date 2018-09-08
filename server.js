var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// require('./app/data/friends')
require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRoutes')(app)

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
