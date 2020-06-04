import $ from 'jquery';
import 'slick-carousel';


$(window).on('load', function () {

  console.log("Hi, this is Ainqa!"); // eslint-disable-line no-console

  $('.js-a-card-slider ').slick({
    cssEase: 'linear',
    slidesToShow: 2.3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: $('.news-arrows .next'),
    prevArrow: $('.news-arrows .prev'),
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.8,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 0.9,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

});