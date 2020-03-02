$(function () {

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // }); Для бургера!

  //   $('.class').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // }); Обычный одиночный слайдер!

  //  $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // }); Двойной слайдер!


  $('.services__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.services__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.services__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
  $('.order__tabs .tab-o').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.order__tabs').find('.tab-item-o').removeClass('active-tab').hide();
    $('.order__tabs .tabs').find('.tab-o').removeClass('active-o');
    $(this).addClass('active-o');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

});