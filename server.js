var express = require('express');
var app = express();

app.get('/about', function (req, res, next) {
  res.status(200);
  res.send("<html><body><h1>About page</h1></body></html>");
});

app.get('/', function (req, res, next) {
  // res.status(200);
  res.status(200).sendFile(__dirname + "/public/index.html");
});

app.get('/people', function (req, res, next) {
  // res.status(200);
  res.status(200).sendFile(__dirname + "/public/people.html");
});

app.get('/people/:name', function (req, res, next) {
  console.log("== req.params:", req.params);
  var name = req.params.name;
  res.status(200).sendFile(
    __dirname + "/public/people/" + name + ".html"
  );
});

app.get('/people/:name/:photo', function (req, res, next) {
  console.log("== req.params:", req.params);
  next();
});

// app.post();

app.get('*', function (req, res, next) {
  // res.status(200);
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(8000, function () {
  console.log("== Server is listening on port 8000!!!!!");
});
