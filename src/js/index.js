import $ from 'jquery';
import 'slick-carousel';

console.log("Hi, this is Ainqa!"); // eslint-disable-line no-console


$('.js-homepage-review').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    appendArrows: '.slider-arrows',
    appendDots: '.slider-dots'
  });
