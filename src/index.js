import './scss/index.scss'
import * as $ from 'jquery'
import 'bootstrap'
$(document).ready(function(){
  $('.spiner').addClass('oopacity');
});
$('.toggle').on('click', function() {
  console.log('menu_active');
  $('.main-menu').toggleClass('menu_active');
  $('.menu-icon').toggleClass('menu-icon-active');
  $('header .v-1110 nav.menu').toggle();
});


$('#your-customer a:nth-child(2)').hover(function() {
  $('#your-customer a').toggleClass('active');
});

$('.tabs-menu ul li').click(function() {
  // $('.tabs-menu ul li').toggleClass('active');
  $('.tabs-menu ul li').removeClass('active');
  $(this).toggleClass('activve');
  $('html, body').animate({scrollTop: 0}, 'fast');
});

$('.number').click(function() {
  // $('.tabs-menu ul li').toggleClass('active');
  $('.one-sms').addClass('active');
});

const $element = $('#real-demand-delivered');
let isAnimated = false
$(window).scroll(function() {
  const scroll = $(window).scrollTop() + $(window).height();
  const offset = $element.offset().top
  if (scroll > offset && !isAnimated) {
    isAnimated = true;
    $('.one-sms').addClass('active');
  }
});
const $element2 = $('#real-demand-delivered .second-row');
let isAnimated2 = false
$(window).scroll(function() {
  const scroll = $(window).scrollTop() + $(window).height();
  const offset = $element2.offset().top
  if (scroll > offset && !isAnimated2) {
    isAnimated2 = true;
    $('.animation_image').addClass('active');
  }
});
