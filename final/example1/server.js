
//Using ExpressJS as a wrapper around NodeJS for Server Stuff
var express = require('express');

//The variable 'app' will be our reference within the program to the server functionality
var app = express();

//Port number that we want Node to listen on. 1337 is a node convention =P
var port = 1337;

app.listen(port, function(){

	//This command will get fired once app.listen() succeeds. [Further Reading: Callbacks]
	console.log("Server Running On Port " + port)

});


//This will trigger on accessing the 'root' of the server. [Further Reading: API Endpoints]
app.get('/', function(request, response){

	//The parameters to the function are 'request' and 'response'
	//The 'request' parameter is the request object that is recieved by Node from the client
	//The 'response' param is the response object that is sent out by Node to the client
	//Here, we send back a simple string.

	response.send("I set up my first Node Server! =D");

	//Kudos. You've built your first Node Server using ExpressJS. =)
})
