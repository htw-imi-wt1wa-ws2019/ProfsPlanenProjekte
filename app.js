/* Backend-Server configuration and functionality */

/*=========*/
/* Imports */
/*=========*/

// Express is a NodeJS Framework for creating a webserver
var express = require('express');
var path = require('path');
var app = express();

// NPM-Package that enables the server to talk to the MariaDB database
const mariadb = require('mariadb');

// Bodyparser is needed to parse the body of HTTP-Requests
const bodyParser = require('body-parser');

/*===============*/
/* Configuration */
/*===============*/

// Configure and create connection to the database
const con = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'profs_planen_projekte',
  connectionLimit: 5
}).getConnection();


/* Express-App configuration: tell express to use different middleware: */

// Set CORS-Headers to allow cross domain requests and different HTTP-Methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});

// Tell express to use the bodyParser for JSON data
app.use(bodyParser.json());

/*===============*/
/* API-Endpoints */
/*===============*/

// GET: All projects
app.get('/api/projects', function (req, res) {
  con.then(connection => {
    connection.query("SELECT * FROM project").then(projects => {
      res.json(projects);
    });
  });
});

// GET: All published projects
app.get('/api/projects/published', function (req, res) {
  con.then(connection => {
    connection.query("SELECT * FROM project WHERE status = 1").then(projects => {
      res.json(projects);
    });
  });
});

// GET: A single project by id
app.get('/api/projects/:id', function (req, res) {
  con.then(connection => {
    connection.query("SELECT * FROM project WHERE id = " + req.params.id).then(project => {
      res.json(project);
    });
  });
});

// PUT: An edited project
app.put('/api/projects/:id', function (req, res) {
  const values = [
    req.body.title,
    req.body.lecturer,
    req.body.status,
    req.body.professor,
    req.body.description,
    req.body.extern_name,
    req.body.extern_email,
    convertDatepickerToMariaDB(req.body.extern_date),
    req.body.extern_comment
  ];
  con.then(connection => {
    connection.query(`UPDATE project SET
      title = ?,
      lecturer = ?,
      status = ?,
      professor = ?,
      description = ?,
      extern_name = ?,
      extern_email = ?,
      extern_date = ?,
      extern_comment = ?
    WHERE id = ${req.params.id}
    `, values).then(project => {
      res.json(project);
    });
  });
});

// CREATE: A new project
app.post('/api/projects', function (req, res) {
  const values = [
    req.body.title,
    req.body.lecturer,
    req.body.status,
    req.body.professor,
    req.body.description,
    req.body.extern_name,
    req.body.extern_email,
    convertDatepickerToMariaDB(req.body.extern_date),
    req.body.extern_comment
  ];
  con.then(connection => { connection.query(
    `INSERT INTO project (title, lecturer, status, professor, description, extern_name, extern_email, extern_date, extern_comment) 
    values  (?, ?, ?, ?, ?, ?, ?, ?, ?)`, values).then(projects => {
      res.sendStatus(200);
    });
  });
});

/*==================*/
/* Helper functions */
/*==================*/

// The frontend date-picker and MariaDB have different Date formats. 
// This function is used to convert the user input to the database format.
function convertDatepickerToMariaDB(date) {
  return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
}



/*===============*/
/* START SERVER */
/*===============*/

// Start server and listen on port 8080
app.listen(8080, function () {
  console.log('ProfsPlanenProjekte server listening on port 8080!');
});
