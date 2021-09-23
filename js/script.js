$(function () {
  'use strict';



  //   // // Banner slider start
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // gallary slider

  $('.gal_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
  // gallary slider

  //   // About video start
  $('.venobox').venobox();

  //  feed back slider

  $('.feed_part_sly').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.col_img_sly'
  });
  $('.col_img_sly').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feed_part_sly',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });
  //feed bacak slider


  //   //counter up
  // Counter up js here
  $('.counter').counterUp({
    delay: 10,
    time: 500,
  });



  var navOff = $('.main_menu').offset().top;

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navOff) {
      $('.main_menu').addClass('menu_fix');
    } else {
      $('.main_menu').removeClass('menu_fix');
    }
  });
  //manu fix end


  //   // Back to top start

  $('.back_to_top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 500);
  });

  $(window).scroll(function () {
    var scroll2 = $(this).scrollTop();
    if (scroll2 > 0) {
      $('.back_to_top').fadeIn();
    } else {
      $('.back_to_top').fadeOut();
    }
  });

  //   //back to top end

});