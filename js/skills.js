// $(document).ready(function(){

// 	var container = $('.container');
// 	$('#get').click(function () {
// 		$.ajax({
// 			type: 'GET',
// 			url: 'skills.json',
// 			dataType: 'json',
// 			success:function(data){
// 				$.each(data,function (index, item) {
// 					$.each(item,function (key, value) {
// 						container.append("<li>Name: "+this['name']+"<br>&emsp;&emsp;Desc: "+this['desc']+"</li><br>")
// 					})
// 				})
// 			}
// 		})
// 	})
// })

function toggleNavPanel (x){

var panel = document.getElementById(x), navarrow = document.getElementById('navarrow'), maxH = "300px";
 
 if(panel.style.height == maxH){
 	panel.style.height= "0px";	
 	navarrow.innerHTML = "&#9662;";
 }
else{
	panel.style.height = maxH;
	navarrow.innerHTML = "&#9662;";
}

}

// function bindToggleEvent(){

// }