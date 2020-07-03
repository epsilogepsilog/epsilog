/* console.log('homepage.js loaded'); */

$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
  
	$('a[href^="#"]').not(".carousel-control-next, .carousel-control-prev").click(function(e){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top -100}, 2000);
	    //
	    $('.navbar-collapse').collapse('hide')
	});
 
});


/* window.onload = function() {

}; */
