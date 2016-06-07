// New NodeJs Server by Danny Bui

// Imports
var http = require('http');
var express = require('express');
var app = express();
  fs = require('fs');
app.use ('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('./index.html', { root: __dirname });
});
app.listen(8082, function(){
  	console.log('Successfully listening on port 8082');
})
