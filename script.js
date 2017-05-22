console.log("smaesh")

$(document).ready(function() {
  $("#the-x").click(function() {
    $("#side-bar").toggle( "slide" );
    $("#main").css("width","100%");
  });
});

//
// $("#sidebar-x").hover(
// 	function() {
//     //$("#side-bar").addClass("0width");
//     console.log("clicked")
//   } ,20
// );
