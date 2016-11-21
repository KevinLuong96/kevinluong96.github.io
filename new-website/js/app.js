'use strict';

$(document).ready(function(){
  $('.scrolling').animate({
    'max-width': '75%',
    }, 750, 'linear', function() {
      $('#intro').fadeOut(500);
  });

  $('section h2').siblings().hide();
});


//Event handlers

$('#clickable').click(function(){
  $('nav').toggleClass('static');
  $(this).children().toggleClass('coloured');
  $(this).next().toggleClass('flexed');
});


$('section h2').click(function(){
  $(this).toggleClass('coloured');
  $(this).siblings().slideToggle();

});