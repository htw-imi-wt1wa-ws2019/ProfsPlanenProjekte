var express = require('express');
var path = require('path');
var app = express();

app.get('/api/projects', function (req, res) {
  const projects = [{
      id: 'server project1'
    },
    {
      id: 'server project2'
    },
    {
      id: 'server project3'
    },
  ]
  res.json(projects);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});