var express = require('express');
var app = express();
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('uploads'));

app.get('/', function(req, res){
    res.sendFile('public/index.html');
});

app.post('/upload', multer({ dest: 'uploads/'}).single('upload'), function(req, res){
    res.send(req.body.title + "<br>" + req.file.size + "bytes");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("server now listening on port: " + port);
});