var express = require('express');

var app = express();
var port = 1337;

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log("Server Listening on port " + port);
});

app.get('/api', function (request, response) {
	response.send("YOLO");
});