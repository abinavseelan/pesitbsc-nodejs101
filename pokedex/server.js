var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongojs');

var databaseURL = "test";

var app = express();
var port = 1337;

var db = mongo(databaseURL,['pokedb']);

app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log("Server Listening on port " + port);
});

app.get('/api/pokemon', function (request, response) {
	db.pokedb.find(function (err, docs) {
	    console.log("Got");
	    console.log(docs);
	    if(err){
	    	console.log(err);
	    }
	    response.json(docs);
	})
});
