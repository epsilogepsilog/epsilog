
$(window).scroll(function(){
  if ($("#menu").offset().top > 56) {
      $("#menu").addClass("bg-trans");
      $("#menu").removeClass("bg-light");
  } else {
      $("#menu").addClass("bg-light");
      $("#menu").removeClass("bg-trans");
  }
});

$(window).scroll(function() {
if($(window).scrollTop() + $(window).height() == $(document).height()) {
$("#menu").addClass("ocultar");
$("#menu").removeClass("visualizar");
} else {
$("#menu").removeClass("ocultar");
$("#menu").addClass("visualizar");
}
});