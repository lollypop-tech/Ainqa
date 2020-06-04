import $ from 'jquery';
import Parsley from 'parsleyjs';


$(window).on('load', function () {
    $(".sec-form .js-validate").on('click', function (e) {
        e.preventDefault();
        const validator = new Parsley.Factory('#c2-form');
        validator.validate();
    });
});
