console.log("smaesh")

$(document).ready(function() {

  $("#the-x").click(function() {
    $("#side-bar").toggle( "slide" );
    $("#main").css("width","100%");
    $("#sidebar-close").fadeIn(0);
  });

  $("#sidebar-button").click(function() {
    $("#side-bar").toggle( "slide" );
    $("#sidebar-close").fadeOut(80);
    $("#main").css("width","85%");
  });




});
