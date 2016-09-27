// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){

  $('.search__icon').click(function(e){
   e.preventDefault();
   $('.search__form').toggle();
  });

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.nav-bgr').addClass('fixed');
    } else {
        $('.nav-bgr').removeClass('fixed');
    }
});


   / одинаковая высота у services__type /
  var promoTextMaxHeight = 0;
  var promoTextItem = $(".services__type");
  $(promoTextItem).each(function(){
   if ( $(this).height() > promoTextMaxHeight) {
    promoTextMaxHeight = $(this).height();
   }
  });
  $(promoTextItem).height(promoTextMaxHeight);

     / одинаковая высота у interesting-article__title /
  var promoTextMaxHeight = 0;
  var promoTextItem = $(".interesting-article__title");
  $(promoTextItem).each(function(){
   if ( $(this).height() > promoTextMaxHeight) {
    promoTextMaxHeight = $(this).height();
   }
  });
  $(promoTextItem).height(promoTextMaxHeight);

  / одинаковая высота у interesting-article__text /
  var promoTextMaxHeight = 0;
  var promoTextItem = $(".interesting-article__text");
  $(promoTextItem).each(function(){
   if ( $(this).height() > promoTextMaxHeight) {
    promoTextMaxHeight = $(this).height();
   }
  });
  $(promoTextItem).height(promoTextMaxHeight);

  /* header раскрытие списка городов */
  $('.city__choise').click(function(e) {
      e.preventDefault();
      $(this).closest('.city').find('.city__dropdown').toggle();
  });
  $('.city__dropdown').mouseleave(function(){
    $(this).fadeOut();
  });

 /* Scroll to top */

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 102) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });

    $('.totop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

/* Аккордеон*/
// ACCORDION

  $('.sidebar-link__btn').click(function(e){
    e.preventDefault();
    if($(this).next('.sidebar-link__accordion').is(":visible")) {
      $(this).next('.sidebar-link__accordion').hide();
    } else {
      $(this).closest('.sidebar').find('.sidebar-link__accordion').hide();
      $(this).next('.sidebar-link__accordion').show();
    }
  });



  /* Hamburger */
  if ($(window).width() < 768) {
    var headerNavItem = $('.header .nav__item');
    $('.nav__hamburger').show();
    $(headerNavItem).hide();
    $('.hamburger').click(function(e){
      e.preventDefault();
      $(this).toggleClass('hamburger--close');
      $(headerNavItem).toggle();
    });
  }


  /* Открывание меню поиска по клику на иконку */
  if ($(window).width() <= 1024) {
    $('.search__form').hide();
    $('.search__icon').click(function(e){
      e.preventDefault();
      $('.search__form').toggle();
    });
  }

  /* галерея отзывов */
  $('.map__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

  /* Модальное окно "Заказать звонок" */
$('.page-call-btn__btn').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.page-call-btn__overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.page-call-btn__form')
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.page-call-btn__overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('.page-call-btn__form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.page-call-btn__overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });

  /* Review-section in the modal window */
  $('.reviews-section__link').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).closest('.reviews-section__slide').find('.reviews-section__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.reviews-section__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.overlay').fadeOut(400);
        }
      );
  });

  /* Review in the modal window */
  $('.reviews__img').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).closest('.reviews__pic').find('.reviews__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.reviews__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).hide();
          $('.overlay').fadeOut(400);
        }
      );
  });

  /* Form in the modal window */
  $('.btn').click( function(e){
    e.preventDefault();
    var suffix = $(this).data("form");
    var overlay = $('.overlay');
    $('body').css({"overflow":"hidden"});
    $(overlay).show();
    var formClass = '.form--' + suffix;
    $(overlay).find(formClass).fadeIn();
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find(".form").fadeOut();
    $('.overlay').fadeOut(400);
  });

  /* открывание ответа по ссылке "читать далее" */
  $('.question__details').click(function(e) {
      e.preventDefault();
      $(this).closest('.question').find('.question__answer').toggle();
  });

});

