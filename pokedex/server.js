var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongojs');

var databaseURL = "http://localhost:27017/pokedb";

var app = express();
var port = 1337;

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log("Server Listening on port " + port);
});

app.get('/api/pokemon', function (request, response) {
	response.send([{name:"Abinav"},{name:"Aditi"},{name:"Aravind"}]);
});
