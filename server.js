var express = require("express");
var bodyParser = require("body-parser");

// var path = require("path");
// const htmlRoutes = require("./app/routing/htmlRoutes");
// const apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use('/', htmlRoutes);
// app.use('/api/', apiRoutes);


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});