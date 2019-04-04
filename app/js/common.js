$(document).ready(function(){
       $(window).scroll(function() {
           if ( $(this).scrollTop() >= 100 ) {
               $('.main-header').addClass('active')
           } else if ( $(this).scrollTop() <= 100 ) {
               $('.main-header').removeClass('active');
           } else {
               $('main-header').addClass('active');
           }
       });
});

