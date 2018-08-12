var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  })
}



// const htmlRoutes = require('express').Router();

// htmlRoutes.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/home.html"));
// });

// htmlRoutes.get("/survey", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/survey.html"));
// });

// module.exports = htmlRoutes;