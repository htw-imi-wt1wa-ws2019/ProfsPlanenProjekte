var express = require('express');
var path = require('path');
var app = express();
const mariadb = require('mariadb');
const con = mariadb.createPool({
     host: '127.0.0.1', 
     user:'root', 
     password: 'root',
     database: 'profs_planen_projekte',
     connectionLimit: 5
}).getConnection();

// Set CORS-Headers to allow cross domain requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/projects', function (req, res) {
  con.then(connection => {
    connection.query("SELECT * FROM project").then(projects => {
      res.json(projects);
    });
  });
});

app.get('/api/projects/add', function (req, res) {
  con.then(connection => {
    connection.query("INSERT INTO project () values ()").then(projects => {
      res.json(projects);
    });
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function fakeDatabaseCall(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  })
}