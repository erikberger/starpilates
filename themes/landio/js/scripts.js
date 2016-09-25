$(document).ready(function(){
     $(window).scroll(function() {
       if ($(document).scrollTop() > 75) {
         $(".navbar-fixed-top").addClass("stuck");
       } else {
         $(".navbar-fixed-top").removeClass("stuck");
       }
     });
   });
