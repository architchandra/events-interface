$(function()  {

  /* Reset if the window is resized */
  $(window).resize(function()  {
    $('.event-details-container').hide();
  });

/*   Show event details when the correspinding event is clicked - different logic for different viewport sizes */
  $('#may-fifth-elephant-2019').on('click', function()  {
    $('.event-details-container').hide();
    if($(window).width() > 991)  {
      $('.event-details-container[data-event-id="may-fifth-elephant-2019"]').appendTo('.sidebar');
    }  else  {
      $('.event-details-container[data-event-id="may-fifth-elephant-2019"]').insertAfter('.calendar-mobile');
      $('html, body').animate({
        scrollTop: $('#calendar-mobile').offset().top + $('#calendar-mobile').height()
      }, 500);
    }
    $('.event-details-container[data-event-id="may-fifth-elephant-2019"]').show();
  });

  $('#may-ctotalk-with-walmart-labs').on('click', function()  {
    $('.event-details-container').hide();
    if($(window).width() > 767)  {
      $('.event-details-container[data-event-id="may-ctotalk-with-walmart-labs"]').appendTo('.sidebar');
    }  else  {
      $('.event-details-container[data-event-id="may-ctotalk-with-walmart-labs"]').insertAfter('.calendar-mobile');
      $('html, body').animate({
        scrollTop: $('#calendar-mobile').offset().top + $('#calendar-mobile').height()
      }, 500);
    }
    $('.event-details-container[data-event-id="may-ctotalk-with-walmart-labs"]').show();
  });

});