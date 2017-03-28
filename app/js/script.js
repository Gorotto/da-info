// var map, map_2, map_3;
// ymaps.ready(function () {
//     if ($('#map').length > 0) {
//         map = new ymaps.Map("map", {
//             center: [59.94, 30.32],
//             zoom: 12
//         });
//     }
//     if ($('#map_2').length > 0) {
//         map_2 = new ymaps.Map("map_2", {
//             center: [48.0054, 37.7709],
//             zoom: 12
//         });
//     }
//     if ($('#map_3').length > 0) {
//         map_3 = new ymaps.Map("map_3", {
//             center: [59.94, 30.32],
//             zoom: 12
//         });
//     }
// });
var map = new Map();
map.init({
    selector:'#map',
    center: $(".concreate-adress").html(),
    zoom:12,
    placemarks: [
        {
            address: $(".concreate-adress").html(),
            options: [
                {key:'draggable',value:false}
            ],
            properties: [
                {key:'balloonContentHeader', value: $(".map-placemarks-title").html()}
            ]
        }
    ]
});
$(document).ready(function () {
    /*hamburger*/
    var windowWidth = $(window).width();

    $(".toggle_mnu").click(function () {
        $(".sandwich").toggleClass("active");
    });

    if (windowWidth < 769) {
        $(".header-menu ul a").click(function () {
            $(".header-menu").fadeOut(600);
            $(".sandwich").toggleClass("active").append("<span>");
        });

        $(".toggle_mnu").click(function () {
            if ($(".header-menu").is(":visible")) {
                $(".header-menu").fadeOut(600);
                $(".header-menu ul li a").removeClass("fadeInUp animated");
            } else {
                $(".header-menu").fadeIn(600);
                $(".header-menu li a").addClass("fadeInUp animated");
            }
        });
    }
    /*hamburger*/
    /*hamburger-news*/

	$(".toggle_mnu__rubrick").click(function() {
		$(".sandwich").toggleClass("active");
	});

  $(".dotsCont").click(function () {
      $(".dotsCont").fadeOut(600);
      $(".sandwich").toggleClass("active").append("<span>");
  });

  $(".toggle_mnu__rubrick").click(function () {
      if ($(".dotsCont").is(":visible")) {
          $(".dotsCont").fadeOut(600);
          $(".dotsCont").removeClass("fadeInUp animated");
      } else {
          $(".dotsCont").fadeIn(600);
          $(".dotsCont").addClass("fadeInUp animated");
      }
  });
    /*hamburger-news*/

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

    $(".rubrick-slider__wrap").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: true,

        navigation: true,
        /*navigationText: true,*/
        pagination: true,
        items: 1,
        dots: true,
        dotdata: true,
        dotsContainer: '.dotsCont',
        singleItem: false,
        mouseDrag: false,
        touchDrag: false,
        responsiveClass: true,
    });

    $(".afisha-top-slider__wrap").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: true,
        navigation: true,
        /*navigationText: true,*/
        pagination: true,
        autoplay: true,
        autoplayTimeout: 9000,
        items: 3,
        dots: true,
        singleItem: false,
        mouseDrag: false,
        touchDrag: false,
        responsiveClass: true,

    });

    var carousel1 = '.js-carousel-1';
    var carousel2 = '.js-carousel-2';
    var carousel3 = '.js-carousel-3';
    var carousel4 = '.js-carousel-4';

// Initialize plugin
  var owlCarousel1 = $(carousel1).owlCarousel({
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    margin: 30,
    nav: true,
    navText: true,
    navigation: true,
    /*navigationText: true,*/
    pagination: true,
    items: 1,
    dots: true,
    singleItem: false,
  });
  var owlCarousel2 = $(carousel2).owlCarousel({
      loop: true,
      margin: 30,
      mouseDrag: false,
      touchDrag: false,
      nav: true,
      navText: true,
      navigation: true,
      /*navigationText: true,*/
      pagination: true,
      items: 1,
      dots: true,
      singleItem: false,
  });
  var owlCarousel3 = $(carousel3).owlCarousel({
      loop: true,
      margin: 30,
      mouseDrag: false,
      touchDrag: false,
      nav: true,
      navText: true,
      navigation: true,
      /*navigationText: true,*/
      pagination: true,
      items: 1,
      dots: true,
      singleItem: false,
  });
  var owlCarousel4 = $(carousel4).owlCarousel({
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      margin: 30,
      nav: true,
      navText: true,
      navigation: true,
      /*navigationText: true,*/
      pagination: true,
      items: 1,
      dots: true,
      singleItem: false,
  });

  $('.customNextBtn').click(function() {
      owlCarousel1.trigger('next.owl.carousel');
      owlCarousel2.trigger('next.owl.carousel');
      owlCarousel3.trigger('next.owl.carousel');
      owlCarousel4.trigger('next.owl.carousel');
      return false;
  })
  $('.customPrevBtn').click(function() {
    owlCarousel1.trigger('prev.owl.carousel', [300]);
    owlCarousel2.trigger('prev.owl.carousel', [300]);
    owlCarousel3.trigger('prev.owl.carousel', [300]);
    owlCarousel4.trigger('prev.owl.carousel', [300]);
    return false;

})





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

  /* open tabs*/
    $('.page__tabs_target').click(function(event) {
    $('.page__tabs_targett').removeClass('page__tabs_active');
          $(this).addClass('page__tabs_active');
          event.preventDefault();
          var target = ($(this).data('tab'));

          $('.page__tabcontent').hide();
          $("."+ target).show();
        });
/* close tabs */

/* komunalka */

    $(".komunalka__item").hover(function(e) {
    e.preventDefault();
    $(".komunalka__item").removeClass('komunalka__line_active');
    $(this).addClass('komunalka__line_active');
    })

/* komunalka */
    // input
    $(".search-input").click(function(e) {
      e.preventDefault();
      $(".search-input").removeClass('search_input_acive');
      $(this).addClass('search_input_acive', {duration:1000});
    })
    // input

    $('.open-soc').click(function(event) {
      // $(this).next('.hide-social').slideToggle();
      var prev = $(this).prev('.hide-social');
        $(this).siblings('.hide-social').not(prev).slideUp("slow");
        prev.slideToggle("slow");
      return false;
    });


    /*datapicker*/
    $(".datepicker-wrap").click(function() {
        $(".datepicker-inline").toggle("slow");
    });
    // $('.datepicker-wrap').datepicker({
    //   inline: false,
    //     onShow: function(dp, animationCompleted){
    //         if (!animationCompleted) {
    //             log('start showing')
    //         } else {
    //             log('finished showing')
    //         }
    //     },
    //     onHide: function(dp, animationCompleted){
    //         if (!animationCompleted) {
    //             log('start hiding')
    //         } else {
    //             log('finished hiding')
    //         }
    //     }
    // });
    /*datapicker*/


    /* scroll fixed socials */

    $('#aside').hcSticky();


    /*consultants tabs*/
    jQuery(".page__tabs_target").click(function (e) {
 			jQuery(".page__tabs_target").removeClass("page__tabs_active");
 			 jQuery(this).addClass("page__tabs_active");
 			 jQuery('.consultants__aside_item').removeClass('current');
 			 jQuery('.consultants__main_item').removeClass('current');
 				e.preventDefault();
 			var t = jQuery(this).attr('data-tab');
 			var t1 = jQuery(this).attr('data-tab-main');
 			jQuery(".consultants__aside_item").fadeOut(500), jQuery("#" + t).addClass('current').fadeIn(500);
 			jQuery(".consultants__main_item").fadeOut(500), jQuery("#" + t1).addClass('current').fadeIn(500);

 	});
    /*consultants tabs*/
});

jQuery(function () {

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop(),
            h = jQuery("body").css("height");
        if (top < 649) {
            jQuery(".social-wrapper").addClass('move');
            jQuery(".social-wrapper").hcSticky();
         } else {
            jQuery(".social-wrapper").hcSticky();
        }
    });


});

(function($) {
    $(function() {

        $('ul.tabs__caption').each(function() {
            $(this).find('li').each(function(i) {
                $(this).click(function(){
                    $(this).addClass('active').siblings().removeClass('active')
                        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
                });
            });
        });
    })

    $(".consultation-slider").owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 500,
        navText: ['<img src="img/icons/arrow-left.png" >', '<img src="img/icons/arrow-right.png" >'],
        responsiveClass:true,
        pagination: true,
        items: 4,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3,
                margin: 28
            },
            980: {
                items: 4,
                margin: 12
            }
        }
    });
    /*$(".accordion-menu ul li").click(function (event) {
        event.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    });
    /*$(".accordion-menu ul li.active").click(function (event) {
        event.preventDefault();
        $(this).removeClass("active");
    });*/

        /*$(".accordion-menu ul li").on("click", function(event){
            event.preventDefault();
            if($(this).hasClass('active')){
                $(this).removeClass("active");
            }else{
                $(this).addClass("active");
            }
        });*/

    $(".accordion-menu ul li a").on("click", function(event){
        event.preventDefault();
        $(this).next("ul").toggleClass("up-child");
    });



    /*$(".accordion-menu ul li ul li").on("click", function(event){
        event.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass("active");
        }else{
            $(".accordion-menu ul li ul li").removeClass("active");
            $(this).addClass("active");
        }
    });*/



})(jQuery)
