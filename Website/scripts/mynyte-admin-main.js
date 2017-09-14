function showSubSection(elem) {
	console.log(elem);
	var body = $(elem).closest('.admin-section-header').next('.admin-section-body');
	console.log(elem);
	if (body.hasClass("open")) {
		$(elem).removeClass("fa-arrow-up").addClass("fa-arrow-down");
		body.removeClass("open");
	} else {
		$(elem).removeClass("fa-arrow-down").addClass("fa-arrow-up");
		body.addClass("open");
	}
}	
(function(){

})();
