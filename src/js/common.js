import "../scss/main.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";
import "babel-polyfill";

import "../pug/index.pug";
import "../pug/about.pug";

import AOS from 'aos';
import $ from 'jquery';
import "bootstrap/js/src/tab";

import "../js/components/select-drop";
import "bootstrap/js/dist/tab";

import rightSticky from "./components/right-sticky";
const rightsticky = new rightSticky();

console.log("Hi, my name is Common!"); // eslint-disable-line no-console

$(window).on('load', function () {

  setTimeout(function () {
    $('.loader-wrapper').fadeOut("fast");
  }, 1000)


  setTimeout(function () {
    AOS.init({
      once: true
    });
  }, 1500);

  $(document).on("click", function() {
    $(".aq-header .lang").removeClass("show");
  });

  $(document).on("click",".aq-header .lang", function(event) {
    event.stopPropagation();
    $(this).toggleClass("show");
  });

});


$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();

  if (scroll > 110) {
    $(".aq-header").addClass("box-shadow")
  }
  else {
    $(".aq-header").removeClass("box-shadow")

  }
});