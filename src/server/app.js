var express = require('express');
var path = require('path');
var app = express();
var oddEven = require('./modules/oddEven');
var capitalize = require('./modules/capitalize');
var bodyparser = require('body-parser');


app.use(express.static('src/server/public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/oddEven/:num', function(req,res){
  console.log('log req . param', req.params.num);
  var numConvert = parseInt(req.params.num);
  res.send(oddEven(numConvert));
});

app.post('/capitalize', function(req, res){
  console.log('log reqdotbody', req.body);
  res.send(capitalize(req.body.sentence));
});

app.listen(4005, function() {
  console.log('up on 4005');
});
