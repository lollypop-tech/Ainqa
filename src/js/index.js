import $ from 'jquery';
import 'slick-carousel';


$(window).on('load', function () {

  console.log("Hi, this is Ainqa!"); // eslint-disable-line no-console

  $('.js-homepage-review').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    appendArrows: '.slider-arrows',
    appendDots: '.slider-dots'
  });

});