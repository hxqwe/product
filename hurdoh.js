/* global $ */


$(document).ready(function() {
  $('.slide-toggle').on('click', () => {
    $("#im1").animate({
      width: "0%",
      height: "100%"
    }, 1500, function(){
      $("#im1").attr('src',"Images/Image4.png").animate({
      width: "100%",
      height: "100%"
      }, 1500); 
    });

    });

});