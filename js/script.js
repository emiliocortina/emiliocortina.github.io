var logo_white = "resources/logos/firma_white.svg";
var logo_dark = "resources/logos/firma_grey.svg";

var burger_white = "resources/logos/burger_thin.svg"
var burger_dark = "resources/logos/burger_grey.svg"


class StyleManager {

    hideMenu() {
        $(".menu").hide(300);
    }

    toggleMenu() {
        $(".menu").toggle(300);;
        this.styleScrolling();
    }

    resizeMenu() {
        if (window.matchMedia('(max-width: 786px)').matches) {
            $(".burger-menu").show();
            $(".menu").hide();
        } else {
            $(".burger-menu").hide()
            $(".menu").show();
        }
        this.setStyle();
    }

    setStyle() {
        if ($(window).scrollTop() <= 155) {
            this.styleTop();
        }
        else {
            this.styleScrolling();
        }
    }

    styleTop() {
        if ((window.matchMedia('(max-width: 786px)').matches)) {
            if ($(".menu").is(":visible")) {
                return;
            } else {
                $(".logo-text").css('opacity', '0');
            }
        }
        $('nav').removeClass('black');
        $("#logo-img").attr("src", logo_white);
        $("#burger-button").attr("src", burger_white);
        $(".headerTitle").css('opacity', 1);
    }

    styleScrolling() {
        $('nav').addClass('black');
        $("#logo-img").attr("src", logo_dark);
        $("#burger-button").attr("src", burger_dark);
        $(".logo-text").css('opacity', '1');
        $(".headerTitle").css('opacity', 0);
    }
    
}

var styleManager = new StyleManager();

$(document).ready(function () {
    $("#burger-button").on("click", function () {
        console.log("HOLA");
        styleManager.toggleMenu();
    });
    styleManager.resizeMenu();
    styleManager.setStyle();
});



$(window).resize(function () {
    styleManager.resizeMenu();
});

$(window).on("scroll", function () {
    styleManager.setStyle();
});

$(function () {
    var $win = $(window);
    var $box = $(".navbar");

    $win.on("click.Bst", function (event) {
        if (
            $box.has(event.target).length == 0
            &&
            !$box.is(event.target)
        ) {
            if ((window.matchMedia('(max-width: 786px)').matches)) {
                styleManager.hideMenu();
            }
        }
    });

});


