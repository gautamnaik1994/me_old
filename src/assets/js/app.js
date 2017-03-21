// window.onload

// When do they fire ?

//     window.onload

// By
// default, it is fired when the entire page loads, including its content(images, css, scripts, etc.)
// In some browsers it now takes over the role of document.onload and fires when the DOM is ready as well.
// document.onload

// It is called when the DOM is ready which can be prior to images and other external content is loaded.





$(document).foundation();
//new WOW().init();
$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});
