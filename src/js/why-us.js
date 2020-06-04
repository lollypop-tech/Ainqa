import $ from 'jquery';
import 'slick-carousel';


$(window).on('load', function () {


    $('.respb-slider').slick({
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: '.slider-arrows',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    var totalSlides = $('.respb-slider li').length;
    $('.respb-nav .total').html(totalSlides - 2);
    
    if($(window).width() <= 1024) {
        $('.respb-nav .total').html(totalSlides - 1);
    }
    
    if($(window).width() <= 767) {
        $('.respb-nav .total').html(totalSlides);
    }

    $(document).on('afterChange', '.respb-slider', function (event, slick, currentSlide) {
        $('.respb-nav .active').html(currentSlide + 1);
    });

});