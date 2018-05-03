var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.json({'msg': 'hello world'})
});

var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('server started');
});
root@393d560ac478:/usr/src/app# cat server.js
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.json({'msg': 'hello world by Mohandas'})
});

var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('server started');
});
