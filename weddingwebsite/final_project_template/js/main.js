$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();


		if(distanceScrolled > 70) {
			$('.celebration').fadeIn('slow');
			$('.story').fadeIn('slow');
		}
		 	else {
			$('.celebration').fadeOut('slow');
			$('.story').fadeOut('slow');
		}

console.log(distanceScrolled);
});
