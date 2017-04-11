$(document).ready(function(){

	var container = $('.container');
	$.ajax({
		type: 'GET',
		url: 'skills.json',
		dataType: 'json',
		success:function(data){
			$.each(data,function (index, item) {
				// debugger;
				container.append("<li>Name: "+item['name']+"<br>&emsp;&emsp;Desc: "+item['desc']+"</li><br>")
				// debugger;
			})
		}
	})
})


// __________________
