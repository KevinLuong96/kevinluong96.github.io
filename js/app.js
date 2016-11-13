'use strict';

$(document).ready(function(){
  $('.scrolling').animate({
    'max-width': '75%',
    }, 750, 'linear', function() {
      $('#intro').fadeOut(500);
  });
});


//Event handlers

$('#clickable').click(function(){
  $('nav').toggleClass('static');
  $(this).next().toggleClass('flexed');
});
