var express = require('express');
var app = express();

var port = 1337;

app.listen(port, function(){
	console.log("Server Running on Port " + port);
});

//This tells express that the moment I visit the server, it should look into the ./public folder for a index.html and send it to me.

app.use(express.static(__dirname + '/public'));;

//---------------------------------------------------
//Responses to different endpoints(URLs)

app.get('/endpoint1', function(request,response){
	response.send("You Hit Endpoint 1!");
});

app.get('/endpoint2', function(request,response){
	response.send("You Hit Endpoint 2");
});

app.get('/api/endpoint', function(request,response){
	response.send("You Hit Endpoint /api/endpoint");
})

//---------------------------------------------------
// Responses to the different access methods.

app.get('/api/singleendpoint', function(request,response){
	response.send("You're GET-ing!");
});

app.post('/api/singleendpoint', function(request,response){
	response.send("You're POST-ing!");
});

//---------------------------------------------------
