var express = require('express');
var app = express();

var port = 1337;

app.listen(port, function(){
	console.log('Server Listening On Port ' + port);
})

//---------------------------------------------------

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

app.get('/api/singleendpoint', function(request,response){
	response.send("You're GET-ing!");
});

app.post('/api/singleendpoint', function(request,response){
	response.send("You're POST-ing!");
});

app.delete('/api/singleendpoint', function(request,response){
	response.send("You're DELETE-ing!");
})

app.put('/api/singleendpoint', function(request,response){
	response.send("You're PUT-ing!");
})

//---------------------------------------------------

