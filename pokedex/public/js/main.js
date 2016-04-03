$(document).ready(function(){
	fetch();
});

var fetch = function () {
	$.ajax({url: "/api/pokemon", success: function(result){
		console.log(result);
		$('#pokemon_details').empty();
		var html = '<div class="row space"><h1>The Originals</h1></div><div class="row space"><a href="new.html"><button class="btn btn-success">Add A New Pokemon</button></a></div><div class="row space"><table id="tbl1" class="table table-striped"></table></div>';
		$('#pokemon_details').append(html);
        populate(result);
    }});
}

var populate = function(data){
	var table = $('#tbl1');
	var i;
	for(i in data){
		var html = "<tr><td><img src=\"" + data[i].sprite + "\"/></td>";
		html += "<td><h3>" + data[i].no + "</h3></td>";
		html += "<td><h3>" + data[i].name + "</h3></td>";
		html += "<td><button class='btn btn-danger' onclick='getDetails(" + data[i].no + ")'>View</button></form></td>";
		html += "</tr>";
		table.append(html);
	}
}	

var getDetails = function(number){

	var endpoint = "/api/pokemon/" + number;
	console.log(endpoint);
	$.ajax({url: endpoint, success: function(result){
		console.log(result);

		viewMore(result[0]);
	}});
}

var viewMore = function(data){
	$("#pokemon_details").empty();

	var html = "<h1>" + data.name + "</h1>";
	html += "<h3>Pokedex Number: " + data.no + "</h3>";
	html += "<h3>Type: " +  data.type + "</h3>";
	html += "<h3>Desciption: " + data.description + "</h3>";
	html += "<h3>Evolves into: <b>" + data.evolves + "</h3>";
	html += "<button class='btn btn-danger' onclick='fetch()'>Back</button>";
	$("#pokemon_details").append(html);
}