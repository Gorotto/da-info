// window.onload = function () {
//   //ищем элемент по селектору
//   var a = document.querySelector('.mouse-area');
//   //вешаем на него события
//   a.onmouseout = function(e) {
//     document.getElementByClassname('stock__item_hide').style.display='none';
//   }
//
//   a.onmouseover = function(e) {
//     document.getElementByClassname('stock__item_hide').style.display='block';
//   };
// }

$(document).ready(function () {
  $(".home-content__wrap_slider").owlCarousel({
    loop: true,
    margin: 30,
    nav : true,
    navText: true,
    navigation:true,
    /*navigationText: true,*/
    pagination : true,
    items: 1,
    dots: true,
    singleItem:false,
    responsiveClass:true,
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
  $(document).on('click','.modal-send__close, #overlay',function () {
    $('.modal-send').animate({opacity: 0}, 200,
        function () {
          $(this).css('display', 'none');
          $('#overlay').fadeOut(400);
        }
    );
  });


  // hover stoke
   $(".mouse-area").mouseover(function(){

    var visible =  $(this).parent();
      if(visible.hasClass("hover")){
        visible.removeClass("hover").animate({left:'0'},400);
      }
      else{
        $(".stock__item_visible").removeClass("hover").animate({left:'0'},400);
        visible.addClass("hover").animate({left:'-261px'},400);
      }
  });
  // hover stoke



  /*send message modal validation*/
  var validMassage = new Validation();
      validMassage.init({
      classItem: 'valid',
      eventElement: '#send-message-submit'
  });
  /*close send message modal validation*/
  /*close send message modal*/
});
