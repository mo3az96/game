$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();
    ///////// ** Bestseller ** /////////
    var bestseller = new Swiper('.bestseller-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.bestseller-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller-slider .swiper-btn-next',
            prevEl: '.bestseller-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// ** Feats ** /////////
    var feats = new Swiper('.feats-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.feats-slider .swiper-pagination',
            clickable: true,
        },
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
                allowTouchMove: false,
            },
        },
    });
    ///////// ** Lattest ** /////////
    var lattest = new Swiper('.lattest-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.lattest-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.lattest-slider .swiper-btn-next',
            prevEl: '.lattest-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// ** Specials ** /////////
    var specials = new Swiper('.specials-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.specials-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.specials-slider .swiper-btn-next',
            prevEl: '.specials-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// ** Search ** /////////
    $('.search-icon').click(function () {
        $(".search-form-cont").slideToggle(300);
        $(this).toggleClass("active");
    });
    if ($(window).width() <= 991) {
        $(".search-input").attr("placeholder", "Search..");
    }
    ///////// ** Search ** /////////
    if ($(window).width() <= 991) {
        $('.menu-icon').click(function () {
            $("nav").slideDown(500);
            $("body").addClass("overflow");
        });
        $('.close-btn').click(function () {
            $("nav").slideUp(500);
            $("body").removeClass("overflow");
        });
    }
});