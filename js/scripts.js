$(document).ready(function() {

    var wh = $(window).height();
    var pillsScroll = $(window).width() < 768 ? 150 : 300;
    var speakerScroll = $(window).width() < 768 ? 50 : 100;


    $('.symptom-slider').addClass('owl-carousel');
    $('.symptom-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true
    });

    $('.program-slider').addClass('owl-carousel');
    $('.program-slider').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            }
        }
    });

    $('.reviews-slider').addClass('owl-carousel');
    $('.reviews-slider').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                autoHeight: true
            },
            501: {
                items: 2,
                dots: true,
                nav: false
            },
            768: {
                items: 2,
                dots: false,
                nav: true
            },
            992: {
                items: 3,
                nav: true,
                dots: false
            }
        }
    });

    restructSliders();

    $(window).resize(function() {
        restructSliders();

        if ($(window).width() < 768) {
            pillsScroll = 150;
            speakerScroll = 50;
        }
        else {
            pillsScroll = 300;
            speakerScroll = 100;
        }

        wh = $(window).height();
    });

    $(window).scroll(function() {

        // animations


        if ($(window).scrollTop() > ($('.symptom__title').offset().top - wh + 100)) {
            $('.symptom__title').removeClass('symptom__title--hidden');
        }
        else {
            $('.symptom__title').addClass('symptom__title--hidden');
        }

        if ($(window).scrollTop() > ($('.pills__img').offset().top - wh + pillsScroll)) {
            $('.pills__img').removeClass('pills__img--hidden');
        }
        else {
            $('.pills__img').addClass('pills__img--hidden');
        }

        $('.get-item').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - wh + 150)) {
                $(this).find('.get-item__content').removeClass('get-item__content--hidden');
            }
            else {
                $(this).find('.get-item__content').addClass('get-item__content--hidden');
            }
        });

        if ($(window).scrollTop() > ($('.understand__items').offset().top - wh + 200)) {
            $('.understand__items .about__item').each(function(i) {
                var block = $(this);
                setTimeout(function() {
                    block.removeClass('about__item--hidden');
                }, i*300);
            });
        }
        else {
            $('.understand__items .about__item').addClass('about__item--hidden');
        }

        if ($(window).scrollTop() > ($('.format').offset().top - wh + 400)) {
            $('.format .about__item').each(function(i) {
                var block = $(this);
                setTimeout(function() {
                    block.removeClass('about__item--hidden');
                }, i*300);
            });
        }
        else {
            $('.format .about__item').addClass('about__item--hidden');
        }

        if ($(window).scrollTop() > ($('.tarrifs-slider').offset().top - wh + 100)) {
            $('.tarrifs-item').each(function(i) {
                var block = $(this);
                setTimeout(function() {
                    block.removeClass('tarrifs-item--hidden');
                }, i*300);
            });
        }
        else {
            $('.tarrifs-item').addClass('tarrifs-item--hidden');
        }

        $('.speaker').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - wh + 100)) {
                $(this).find('.speaker__info').removeClass('speaker__info--hidden');
            }
            else {
                $(this).find('.speaker__info').addClass('speaker__info--hidden');
            }
        });
    });

    // menu

    $('.header__mobile-menu').click(function(e) {
        e.preventDefault();
        if (!$('.header').hasClass('header--opened_menu')) {
            $('.header').addClass('header--opened_menu');
        }
        else {
            $('.header').removeClass('header--opened_menu');
        }
    });
});

function restructSliders() {

    if ($(window).width() < 992) {
        if (!$('.tarrifs-slider').hasClass('owl-carousel')) {
            $('.tarrifs-slider').addClass('owl-carousel');
            $('.tarrifs-slider').owlCarousel({
                center: true,
                loop: true,
                responsive: {
                    0: {
                        items: 1.1
                    },
                    768: {
                        items: 1.3
                    }
                }
            });
        }
    }
    else {
        if ($('.tarrifs-slider').hasClass('owl-carousel')) {
            $('.tarrifs-slider').removeClass('owl-carousel');
            $('.tarrifs-slider').owlCarousel('destroy');
        }
    }
}