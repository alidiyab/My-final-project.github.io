var container = $('.container');

$('#get').click(function () {
	$.ajax({
		type: 'GET',
		url: 'skills.json',
		dataType: 'json',
		success:function(data){
			$.each(data,function (index, item) {
				$.each(item,function (key, value) {
					container.append("<li>Name: "+this['name']+"<br>&emsp;&emsp;Desc: "+this['desc']+"</li><br>")
				})
				container.append('<br/></br>')
			})
		}
	})
})