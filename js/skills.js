$(document).ready(function () {
	$.getJSON("skills.json",function(data) {
		$.each(data.skills,function () {
			$("ul").append("<li>Name: "+this['name']+"</li><li><br>Desc: "+this['desc']+"</li>");
		})
	})
})