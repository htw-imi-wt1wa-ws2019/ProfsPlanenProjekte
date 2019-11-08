var express = require('express');
var path = require('path');
var app = express();

// Set CORS-Headers to allow cross domain requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/projects', function (req, res) {
  const projects = [{
      id: 'abc123abc123'
    },
    {
      id: '789xyz789xyz'
    }
  ];

  fakeDatabaseCall(projects).then(data => {
    res.json(data);
  })

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