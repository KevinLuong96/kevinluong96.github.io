$('.home').on('click', '.interests-header, .interests', (event) => {
  $('.interests').slideToggle(600);
  $('.interests-dropdown').css('transform') !== 'none' 
    ? $('.interests-dropdown').css('transform', 'none')
    : $('.interests-dropdown').css('transform', 'rotate(90deg)')
});
