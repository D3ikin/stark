$(function(){

  $('.btn-burger').on('click', function(){
    $('.btn-burger').toggleClass('btn-burger--active');
    $('.header-bottom').toggleClass('header-bottom--active');
  });

  $(".header-bottom__list-link").click( function () {
      $('.btn-burger').removeClass('btn-burger--active');
      $('.header-bottom').removeClass('header-bottom--active');
  });

  $(".header-bottom__list-link").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
  });
  
  $('.faq__item-trigger').on('click', function(){
    $(this).next('.faq__item-content').slideToggle();
  });


  $(".btn").click(function(){
    $(".popup").fadeIn();
    $("body").addClass('popup-active');
  });
  $(".popup_close").click(function(){
    $(".popup").fadeOut();
    $("body").removeClass('popup-active');
  });
  $(".popup").click(function(e){
    if(e.target === this){
      $(".popup").fadeOut();
    }
  });

  $(".send_mail_form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      $(".popup").fadeOut();
    });
    return false;
  });
});