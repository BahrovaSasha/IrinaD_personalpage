
$(document).ready(function(){
    $(".arrow-top").hide();

       $(window).scroll(function() {
           if ( $(this).scrollTop() >= 100 ) {
               $('.main-header').addClass('active')
           } else if ( $(this).scrollTop() <= 100 ) {
               $('.main-header').removeClass('active');
           } else {
               $('main-header').addClass('active');
           }
       });

       $(function() {
           $(window).scroll(function() {
               if ($(this).scrollTop() >= 1200) {
                   $('.arrow-top').fadeIn(1000);
               } else {
                   $('.arrow-top').fadeOut(800);
               }
           });
           $('.arrow-top').click(function() {
               $('body,html').animate({scrollTop: 0}, 800);
           });
       });







});

