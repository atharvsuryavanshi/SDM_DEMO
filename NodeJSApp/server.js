var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });

 
app.get('/hello', function (req, res) {
    var person={firstName:'Atharv',lastName:'Suryavanshi',age:22};
    res.send(person);
});

var server = app.listen(9999, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("NodeJS app listening at http://localhost:9999", host, port)
});