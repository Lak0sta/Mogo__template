$(document).ready(function() {
	$(document).on('click', '.hide-nav', function(){
		var nav = $('.menu');
		$('.hide-nav').toggleClass('active');
		nav.toggleClass('show');
	});
});