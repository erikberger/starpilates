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
     $('a[href*="#"]:not([href="#collapsingNavbar"])').click(function() {
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

   $(function () {

       function initMap() {

           var location = new google.maps.LatLng(39.949753, -75.1755389);

           var mapCanvas = document.getElementById('map');
           var mapOptions = {
               center: location,
               zoom: 17,
               panControl: false,
               draggable: false,
               zoomControl: false,
               scrollwheel: false,
               mapTypeId: google.maps.MapTypeId.ROADMAP
           }
           var map = new google.maps.Map(mapCanvas, mapOptions);

           var markerImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABRFBMVEUAAAD/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abT/abRFtVW0AAAAa3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQYGhscICEiIyQlJikqLC8xO0BBRUlKTVZbXV5maWtsbXF1d3l7fH5/gIWGjo+RkpebnZ6goqWmqquvsLW3ubq8wMHDxcfIzM7P09na3ODi6O3x9/n7/SaP4hMAAAFkSURBVBgZvcFlVwJBAAXQN4soimIrBhZ2JyZ2YrfYHbz//11xBRZ3Zpk9x+O9+DuzjMOdEpLtcGWe5A3c8DMpDBeiTLqCPj9NbdA2Q1McuoqY0gJNU0w5h57CBNOaoSXCjFPo8CVoEYKGCVodI7eCBLPUw4lREuqeiDPbw3Rfa7kHvwl/XefY1hPVXvYiPc2lBr4VD63dU9fz9ngtcE+XvJimO6eA2KYb1/kAxAb1XXqRJFap6zwPP5ao58SDtAXqOPTAYo657RvIMslcdg38Mk5nMQGbYTpZF5AYpNqqgFSEKkcCciNUOYHCDlU+oPBKJT+kCqgWglSQan2Q6qLaPKQiVLuC1BEdCMi800EAEoW0ilYMvNGiFRINzFgJAPCOfjCtHxK9TIlVweSbYcoyJKI0HQSRUbxI0x0k4ky6aEK2yk1+M2DHL7dh2NXs80sZ7F742AG5xjPSB7tAk4BSsBr/7BOZasb4TRfajwAAAABJRU5ErkJggg==';

           var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

          map.set('styles', styles);

           var marker = new google.maps.Marker({
               position: location,
               map: map,
               icon: markerImage
           });

           var contentString = '<div class="info-window">' +
                   '<h3>Studio Location</h3>' +
                   '<div class="info-content">' +
                   '2043 Locust Street, #2A<br>Philadelphia, PA 19103<br>' +
                   '(610) 618-0177' +
                   '</div>' +
                   '</div>';

           var infowindow = new google.maps.InfoWindow({
               content: contentString,
               maxWidth: 400
           });

           marker.addListener('click', function () {
               infowindow.open(map, marker);
           });


       }

       google.maps.event.addDomListener(window, 'load', initMap);
   });
