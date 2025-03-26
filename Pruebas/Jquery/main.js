//$(selector).accion
//$("h1").hide();
/*$(document).ready(function(){


})*/

$(function () {
  $("p").css({
    "background-color": "red",
  });

  $("#segundo").css({
    "background-color": "green",
  });

  $("#hide").click(function () {
    $("#segundo").hide();
  });

  $("#show").click(function () {
    $("#segundo").show();
    $("#segundo").css({
      "background-color": "blue",
    });
  }); 
  
  $("#primero").mouseenter(function () { 
    $("#segundo").fadeOut();
  });

  $("#primero").mouseleave(function () { 
    $("#segundo").fadeIn();
  });
  
});


