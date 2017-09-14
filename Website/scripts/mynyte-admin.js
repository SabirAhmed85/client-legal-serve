function showMenu() {
	if ($('.nav-menu-container').hasClass("open")) {
		$('.nav-menu-button i').removeClass("fa-times").addClass("fa-bars");
		$('.nav-menu-container').removeClass("open");
	} else {
		$('.nav-menu-button i').removeClass("fa-bars").addClass("fa-times");
		$('.nav-menu-container').addClass("open");
	}
}	
(function(){

})();
