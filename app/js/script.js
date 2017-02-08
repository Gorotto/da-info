
$(document).ready(function () {



    $(".home-content__wrap_slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: true,
        navigation: true,
        /*navigationText: true,*/
        pagination: true,
        items: 1,
        dots: true,
        singleItem: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            },
            1200: {
                items: 1,
                nav: true,
                loop: true,

            }
        }
    });

    /*afisha*/
    $('.fancybox').fancybox({
       prevEffect : 'fade',
       nextEffect : 'fade',

       closeBtn  : true,
       arrows    : true,
       nextClick : true,

       helpers : {
           thumbs : {
               width  : 40,
               height : 40

           }
       }
    });
    /*afisha*/
    // hover stoke
    $(".mouse-area").mouseover(function () {

        var visible = $(this).parent();
        if (visible.hasClass("hover")) {
            visible.removeClass("hover").animate({left: '0'}, 400);
        }
        else {
            $(".stock__item_visible").removeClass("hover").animate({left: '0'}, 400);
            visible.addClass("hover").animate({left: '-261px'}, 400);
        }
    });
    // hover stoke

    /*show ads block on mobile*/
    $(document).on('click', '.ads__trigger', function () {
        event.preventDefault();
        var box = $(this).next('.ads__box'),
            link = $(this).parent().find('.more');

        if (box.hasClass('open')) {
            box.removeClass('open').slideUp('fast');
            link.css({display: "none"});
        } else {
            box.addClass('open').slideDown('fast');
            link.css({display: "block"});
        }

    });
    /*close ads block on mobile*/

    /*show photo block on mobile*/
    $(document).on('click', '.photo__trigger', function (e) {
        event.preventDefault();
        var box = $('.photo__box');
        box.slideToggle('slow');
    });
    /*close photo block on mobile*/

    /*send message modal*/
    $(document).on('click', '.footer__send', function () {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('.modal-send').css('display', 'block').animate({opacity: 1}, 200);
            });
    });
    $(document).on('click', '.modal-send__close, #overlay', function () {
        $('.modal-send').animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });

    /*send message modal validation*/
    var validMassage = new Validation();
    validMassage.init({
        classItem: 'valid',
        eventElement: '#send-message-submit'
    });
    /*close send message modal validation*/
    /*close send message modal*/

    // open tabs
    $('.page__tabs_target').click(function(event) {
    $('.page__tabs_target').removeClass('page__tabs_active');
        $(this).addClass('page__tabs_active');
        event.preventDefault();
        var target = ($(this).data('tab'));

        $('.page__tabcontent').hide();
        $("."+ target).show();
      });
      // close tabs
      $(".komunalka__item").click(function(e) {
      e.preventDefault();
      $(".komunalka__item").removeClass('komunalka__line_active');
      $(this).addClass('komunalka__line_active');
      })
});
