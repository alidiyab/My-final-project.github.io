var URL="https://api.github.com/users/alidiyab/repos?sort=created&per_page=5";
$(document).ready(function() {
	bindClickEvent();
	loadCurrentProj();
})

// function bindClickEvent(event) {
// 	$("#currentProjects").click(function(event) {
// 		$('.currentPro').toggle();	
// 		return loadCurrentProj(URL);
// 	})
// }

function bindClickEvent(){
	document.getElementById('currentProjects').onclick(function(){
		document.getElementById('row').innerHTML(`<a href="${itm.html_url}">${itm.name}</a><br>`)
	})
}
// function loadCurrentProj(url){
// 	$.get(url,function(data){
// 		$('.currentPro').html('');
// 		data.map(loadItm);
// }
// }
// function loadItm(itm){
// 	$('.currentPro').append(`<a href="${itm.html_url}">${itm.name}</a><br>`)

// }



// function navbarColor(){
// 	$('ul.nav.navbar-nav > li').click(function(){
// 		// $(this).children
// 		console.log("aaa");
// 	})
// }
