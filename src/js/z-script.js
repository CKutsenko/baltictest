// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){

  $('.search__icon').click(function(e){
   e.preventDefault();
   $('.search__form').toggle();
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

  /* изменение названия, телефона и почты при выборе города */
  $('.city__item').on('click', function(){
    $('.city__name').html($(this).html());
    $('.header__email-wrapper').html('<a class="header__email" target="_blank" href="mailto:'+$(this).data("email")+'">'+$(this).data("email")+'</a>');
    $('.footer__email-wrapper').html('E-mail: <a class="footer__email" target="_blank" href="mailto:'+$(this).data("email")+'">'+$(this).data("email")+'</a>');
    if ($(this).data("address") !== undefined) {
      $('.footer__address').html('г.'+$(this).text()+', '+$(this).data("address"));
    } else {
      $('.footer__address').hide();
    }

    var prefix = $(this).data("prefix");
    var hrefPrefix = prefix.replace(/\D/g, "");
    var tel1 = $(this).data("tel1");
    var hrefTel1 = tel1.replace(/\D/g, "");
    $('.header__tel-wrapper').html('<a class="header__tel" target="_blank" href="tel:+'+hrefPrefix+hrefTel1+'">'+prefix+'<span>'+tel1+'</span></a>');
    var tel1Name = "Телефон";
    if ($(this).data("tel2") !== undefined) {
      var tel2 = $(this).data("tel2");
      var hrefTel2 = tel2.replace(/\D/g, "");
      var tel1Name = "Тел/факс";
      $('.footer__tel-wrapper--tel2').html('Телефон: <a class="footer__tel" target="_blank" href="tel:+'+hrefPrefix+hrefTel2+'">'+prefix+'<span>'+tel2+'</span></a>');
    } else {
      $('.footer__tel-wrapper--tel2').hide();
    }
    $('.footer__tel-wrapper--tel1').html(tel1Name+': <a class="footer__tel" target="_blank" href="tel:+'+hrefPrefix+hrefTel1+'">'+prefix+'<span>'+tel1+'</span></a>');

    if ($(this).text() == "Новосибирск") {
      $('.footer__working-hours span:first').html($(this).data("from"));
      $('.footer__working-hours span:last').html($(this).data("to"));
    }

    var mapRegion = "img/map/" + $(this).data("map");
    $('.location__map-region img').attr({'src': mapRegion, 'alt': $(this).html(), 'title': $(this).html()});

    $('.city__dropdown').hide();
    return false;
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

    /* Hamburger */
  // if ($(window).width() < 768) {
  //   var footerNavItem = $('.footer .footer-nav__item');
  //   $('.footer-nav__hamburger').show();
  //   $(footerNavItem).hide();
  //   $('.footer-nav__hamburger').click(function(e){
  //     e.preventDefault();
  //     $(this).toggleClass('footer-nav__hamburger--close');
  //     $(footerNavItem).toggle();
  //   });
  // }

  /* Открывание меню поиска по клику на иконку */
  if ($(window).width() <= 1024) {
    $('.search__form').hide();
    $('.search__icon').click(function(e){
      e.preventDefault();
      $('.search__form').toggle();
    });
  }

  /* галерея "с нами уже работают" */
  $('.map__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
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

