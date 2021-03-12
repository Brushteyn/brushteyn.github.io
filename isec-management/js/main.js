var header = document.getElementById("header");
var gray = header.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > gray) {
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");
    }
};

window.onscroll = function () {
    fixedHeader()
};

$(function () {
    $('.header__hamb-icon').click(function () {
        $(this).toggleClass('change');
        $('.header__hamb-nav').toggleClass('dblock');
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};

AOS.init();