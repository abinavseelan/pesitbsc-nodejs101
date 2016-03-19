$(document).ready(function(){
	fetch();
});

var fetch = function () {
	$.ajax({url: "/api/pokemon", success: function(result){
		console.log(result);
        populate(result);
    }});
}

var populate = function(data){
	var table = $('#tbl1');
	var i;
	for(i in data){
		var html = "<tr><td><img src=\"" + data[i].sprite + "\"/></td>";
		html += "<td>" + data[i].no + "</td>";
		html += "<td>" + data[i].name + "</td></tr>";
		table.append(html);
	}
}