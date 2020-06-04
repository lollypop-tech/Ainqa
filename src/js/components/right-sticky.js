/*eslint-disable*/
import $ from "jquery"

class rightSticky {
    constructor() {
        if (document.querySelector(".js-right-sticky")) {
            this.init();
        }
    }

    init() {

        $(window).on('ready', function () {
            if ($(".js-right-sticky").height() < $(".js-right-sticky").parent().height()) {
                $(".js-right-sticky").addClass("position-relative");
            }
        });


        $(window).on('scroll', function () {
            var parent = $(".js-right-sticky").parent();
            var parentHeight = $(parent).height();
            var rightHeight = $(".js-right-sticky").height();
            var parentTop = $(parent).offset().top;
            var scrollPosition = $(window).scrollTop();
            var parentScrolled = scrollPosition - parentTop;

            if ($(".js-right-sticky").height() > parentHeight) {
                $(".js-right-sticky").addClass("position-relative");
            }


            if (scrollPosition > $(".sec-banner-bc").height()) {
                $(".js-right-sticky").addClass("sticky");
            }

            else {
                $(".js-right-sticky").removeClass("sticky").removeClass("sticky-bottom");
            }

            if ((parentHeight - parentScrolled) < (rightHeight + 180)) {
                $(".js-right-sticky").removeClass("sticky").addClass("sticky-bottom");
            }

            else {
                $(".js-right-sticky").removeClass("sticky-bottom");
            }
        });
    }

}

export default rightSticky;