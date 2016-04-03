var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongojs');

//Express Config -----------------------------------
var app = express();

var port = 1337;

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log("Server Listening on port " + port);
});


//MongoJS Config -----------------------------------
var databaseURL = "pokedex";

var db = mongo(databaseURL,['pokemon']);


//Routes -------------------------------------------


//Endpoint to get all the pokemon in our database
app.get('/api/pokemon', function (request, response) {
	db.pokemon.find(function (err, docs) {
	    console.log("Got");
	    console.log(docs);
	    if(err){
	    	console.log(err);
	    }
	    response.json(docs);
	})
});

//Endpoint to add a pokemon
app.post('/api/pokemon', function(request,response){
	// console.log(request);
	var pokemon = {};
	pokemon.name = request.body.pokemon_name;
	pokemon.no = request.body.pokemon_number;
	pokemon.sprite = "img/" + request.body.pokemon_number + ".png";
	pokemon.description = request.body.pokemon_description;
	pokemon.type = request.body.pokemon_type;
	pokemon.evolves = request.body.pokemon_evolves;

	db.pokemon.insert(pokemon, function(error,result){
		if(error){
			console.log("Error");
		}
		response.send("Added");
	});
});


//Endpoint to get ONE pokemon
app.get('/api/pokemon/:pokemon_number', function(request,response){

	var number = request.params.pokemon_number;
	console.log(number);
	db.pokemon.find({no : number}, function(error,results){
		if(error){
			console.log(error);
		}
		console.log(results);
		response.json(results);
	})

});

