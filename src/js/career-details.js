import $ from 'jquery';
import Parsley from 'parsleyjs';


$(document).on('change', '.sec-form input[type="file"]', function (e) {
    var file_data = $(this).prop('files')[0].name;
    $(this).siblings('p').removeClass("d-none");
    $(this).siblings('p').find("span").text(file_data);
});



$(document).on('click', '.js-scroll-form', function (e) {
    $('html, body').animate({ scrollTop: $(".sec-form").offset().top - 85 }, "slow");
});


$(window).on('load', function () {
    $(".sec-form .js-validate").on('click', function (e) {
        e.preventDefault();
        const validator = new Parsley.Factory('#c-form');
        validator.validate();
    });
});
