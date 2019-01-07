var logo_white = "resources/logos/firma_white.svg";
var logo_dark = "resources/logos/firma_grey.svg";

var burger_white = "resources/burger_thin.svg"
var burger_dark = "resources/burger_grey.svg"


class StyleManager {

    toggleMenu() {
        $(".menu").toggle(300);;
        styleScrolling();
    }

    resizeMenu() {
        if (window.matchMedia('(max-width: 786px)').matches) {
            $(".menu").hide();
        } else {
            $(".menu").show();
        }
    }
}

var styleManager = new StyleManager();

$(document).ready(function () {
    $("#burger-button").on("click", function () {
        styleManager.toggleMenu();
    });
    styleManager.resizeMenu();
    setStyle();
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
            $(".menu").hide(300);
        } 
    });

});

$(window).resize(function () {
    styleManager.resizeMenu();
});


function toggleMenu() {
    $(".menu").toggle(300);;
    styleScrolling();
}

function resizeMenu() {
    if (window.matchMedia('(max-width: 786px)').matches) {
        $(".menu").hide();
    } else {
        $(".menu").show();
    }
}

$(window).on("scroll", function () {
    setStyle();
});

function setStyle() {
    if ($(window).scrollTop() <= 230) {
        styleTop();
    }
    else {
        styleScrolling();
    }
}

function styleScrolling() {
    $('nav').addClass('black');
    $("#logo-img").attr("src", logo_dark);
    $("#burger-button").attr("src", burger_dark);
    document.querySelector(".logo-text").style.opacity = 1;
}

function styleTop() {
    if ((window.matchMedia('(max-width: 786px)').matches) && $(".menu").is(":visible")) {
        return;
    }
    $('nav').removeClass('black');
    $('.menu-icon').removeClass('black');
    $("#logo-img").attr("src", logo_white);
    $(".navbarWrapper").attr("padding", "1em 0");
    $("#burger-button").attr("src", burger_white);
    document.querySelector(".logo-text").style.opacity = 0;

}

