'use strict';

var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var config = require('./config');
var server = http.createServer();

var template = fs.readFileSync(__dirname + '/hello.ejs', 'utf-8');
var msg;

var n = 0;

server.on('request', function (req, res) {
  n++;
  var data = ejs.render(template, {
    title: 'こんにちは',
    content: "<b>世界</b>",
    n: n
  });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  res.end();
});

server.listen(config.port);

console.log('ポート番号: ' + config.port);