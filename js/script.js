$(function()  {

  /* Reset if the window is resized */
  $(window).resize(function()  {
    $('.event-details-container').hide();
  });

/*   Show event details when the correspinding event is clicked - different logic for different viewport sizes */
  $('#may-fifth-elephant-2019').on('click', function()  {
    $('.event-details-container').hide();
    if($(window).width() > 767)  {
      $('.event-details-container[data-event-id="may-fifth-elephant-2019"]').appendTo('.sidebar');
    }  else  {
      $('.event-details-container[data-event-id="may-fifth-elephant-2019"]').insertAfter('.calendar-mobile');
    }
    $('.event-details-container[data-event-id="may-fifth-elephant-2019"]').show();
  });

});