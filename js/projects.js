var URL="https://api.github.com/users/alidiyab/repos?sort=created&per_page=5";
$(document).ready(function() {
	bindClickEvent();
	// loadCurrentProj();
})

function bindClickEvent(event) {
	$("#currentProjects").click(function(event) {
		loadCurrentProj(URL);
			$('#result-current').toggle();
	})
}

function loadCurrentProj(url){
	$.ajax({
		url:URL,
		type:'get',
		success:function(data){
			showResults(data);
		}
	})
}
function showResults(data){
	// debugger;
	var html = '';
	html+= '<ul>';
	$.each(data, function(i,item){
		html+= '<li><a href="'+item.html_url+'"> '+item.name+' </a></li>'
	})
	html+= '</ul>';
	$('#result-current').html(html);

}

//___________________//

