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

