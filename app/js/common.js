$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('fast');
});
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
    $(document).on('click', '#call-btn, .client-button', function() {
        $('.order-call-popup').addClass('active');
        $('body').addClass('fixed');
    });
    $('.close-call-popup').click(function(){
        $('.order-call-popup').removeClass('active');
        $('body').removeClass('fixed');
    });
    $('.videofeedback-row').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 4000,
                }
            }
        ]
    });




});

