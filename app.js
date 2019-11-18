var express = require('express');
var path = require('path');
var app = express();
const mariadb = require('mariadb');
const bodyParser = require('body-parser');

const con = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'profs_planen_projekte',
  connectionLimit: 5
}).getConnection();

// Set CORS-Headers to allow cross domain requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});
app.use(bodyParser.json());

app.get('/api/projects', function (req, res) {
  con.then(connection => {
    connection.query("SELECT * FROM project").then(projects => {
      res.json(projects);
    });
  });
});

app.get('/api/projects/published', function (req, res) {
  con.then(connection => {
    connection.query("SELECT * FROM project WHERE status = 1").then(projects => {
      res.json(projects);
    });
  });
});

app.get('/api/projects/:id', function (req, res) {
  con.then(connection => {
    connection.query("SELECT * FROM project WHERE id = " + req.params.id).then(project => {
      res.json(project);
    });
  });
});

app.put('/api/projects/:id', function (req, res) {
  con.then(connection => {
    connection.query(`UPDATE project SET
      title = '${req.body.title}',
      lecturer = '${req.body.lecturer}',
      comment = '${req.body.comment}',
      contact_name = '${req.body.contact_name}',
      contact_email = '${req.body.contact_email}',
      contact_date = '${formatDate(req.body.contact_date)}',
      status = '${req.body.status}' 
    WHERE id = ${req.params.id}
    `).then(project => {
      res.json(project);
    });
  });
});

app.post('/api/projects', function (req, res) {
  con.then(connection => {
    connection.query(`INSERT INTO project (title, lecturer, comment, contact_name, contact_email, contact_date, status) 
                      values(
                        '${req.body.title}',
                        '${req.body.lecturer}',
                        '${req.body.comment}',
                        '${req.body.contact_name}',
                        '${req.body.contact_email}',
                        '${formatDate(req.body.contact_date)}',
                        '${req.body.status}'
    )`).then(projects => {
      res.sendStatus(200);
    });
  });
});


function formatDate(date) {
  return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
}


// app.get('/api/delete', function (req, res) {
//   con.then(connection => {
//     connection.query("DELETE FROM project").then(projects => {
//       res.sendStatus(200);
//     });
//   });
// });

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