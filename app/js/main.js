$(function(){
  $('.faq__item-trigger').on('click', function(){
    $(this).next('.faq__item-content').slideToggle(300);
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

  $('.btn-burger').on('click', function(){
    $('.btn-burger').toggleClass('btn-burger--active')
    $('.header-bottom').toggleClass('header-bottom--active')
  });
  

  // $(".send_mail_form").submit(function() {
  //   var th = $(this);
  //   $.ajax({
  //     type: "POST",
  //     url: "mail.php",
  //     data: th.serialize()
  //   }).done(function() {
  //     $(".popup").fadeOut();
  //   });
  //   return false;
  // });
});