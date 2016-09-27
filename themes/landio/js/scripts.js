$(document).ready(function(){
     $(window).scroll(function() {
       if ($(document).scrollTop() > 75) {
         $(".navbar-fixed-top").addClass("stuck");
       } else {
         $(".navbar-fixed-top").removeClass("stuck");
       }
     });
   });

   $(function() {
     // Smooth scrolling
     var smoothScroll = function(target) {
       $('body, html').animate({
         scrollTop: target.offset().top
       }, 750);
     };

     // Clean URL from anchor names and smooth scroll
     $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           smoothScroll(target);
           return false;
         }
       }
     });
   });
