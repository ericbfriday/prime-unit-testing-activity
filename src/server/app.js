var express = require('express');
var path = require('path');
var app = express();
var oddEven = require('./modules/oddEven');

app.use(express.static('src/server/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/oddEven/:num', function(req,res){
  console.log('log req . param', req.params.num);
  var numConvert = parseInt(req.params.num);
  res.send(oddEven(numConvert));
});

app.listen(4005, function() {
  console.log('up on 4005');
});
