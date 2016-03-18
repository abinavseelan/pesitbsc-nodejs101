var express = require('express');
//Require() is used to import the files from the installed express module

var app = express();
//The variable app can now be used as an instance of the server.

var port = 1337;
//It is good convention to maintain the port value in a variable.

app.listen(port,function(){
	console.log("Server Listening on port " + port);
})
//This function starts a server and makes it listen on the port number specified in the variable.
//The function will print "Server Listening on Port 1337" is the app.listen() function was successful.


app.get('/', function(request, response){
	response.send("Hello World");
})
//This is a simple endpoint to return the text "Hello World" on visiting localhost:1337