var URL="https://api.github.com/users/alidiyab/repos?sort=created&per_page=5";
$(document).ready(function() {
	bindClickEvent();
	loadCurrentProj();
})

function bindClickEvent(event) {
	$("#currentProjects").click(function(event) {
		$('.currentPro').toggle();	
		return loadCurrentProj(URL);
	})
}

function loadCurrentProj(url){
	$.get(URL,function(data){
		$('.currentPro').html('');
		data.map(loadItm);
})
}
function loadItm(){
	$('.currentPro').append("<a href='${itm.html_url}'>${itm.name}</a><br>")

}

// ____________________-	