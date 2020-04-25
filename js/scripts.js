$(document).ready(function() {

    var wh = $(window).height();

    $('.symptom-slider').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.program-slider').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.reviews-slider').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    restructSliders();

    $(window).resize(function() {
        restructSliders();

        wh = $(window).height();
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scroll');
        }
        else {
            $('.header').removeClass('header--scroll');
        }




        // animations


        if ($(window).scrollTop() > ($('.symptom__title').offset().top - wh + 100)) {
            $('.symptom__title').removeClass('symptom__title--hidden');
        }
        else {
            $('.symptom__title').addClass('symptom__title--hidden');
        }

        if ($(window).scrollTop() > ($('.pills__img').offset().top - wh + 400)) {
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

    $('.top__mobile-button').click(function(e) {
        e.preventDefault();
        if (!$('.header').hasClass('header--opened_menu')) {

            $('.top').addClass('top--opened_menu');
            $('.header').addClass('header--opened_menu');
        }
        else {
            $('.header').removeClass('header--opened_menu');
            $('.top').removeClass('top--opened_menu');
        }
    });

    $('.scroll-to').click(function(e) {
        e.preventDefault();
        $('.header').removeClass('header--opened_menu');
        $('.top').removeClass('top--opened_menu');
        var scroll_el = $(this).attr('href');
        var destination = $(scroll_el).offset().top;
        if ($(window).width() < 768) {
            if ($(this).attr('href') == '#who') {
                destination += 210;
            }
            else {
                destination -= 250;
            }
        }
        $('html, body').animate( { scrollTop: destination }, 500 );
    });
});

function restructSliders() {

    if ($(window).width() < 992) {
        if (!$('.tarrifs-slider').hasClass('slick-slider')) {
            $('.tarrifs-slider').slick({
                arrows: false,
                dots: false,
                autoplay: false,
                infinite: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    }
    else {
        if ($('.tarrifs-slider').hasClass('slick-slider')) {
            $('.tarrifs-slider').slick('unslick');
        }
    }
}