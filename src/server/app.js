var express = require('express');
var bodyPaser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static('src/server/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(4005, function() {
  console.log('up on 4005');
});
