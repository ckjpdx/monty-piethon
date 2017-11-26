$(document).ready(function(){
  $("header i.fa.fa-bars").click(function(){
    $("nav").slideToggle();
  });
  $(window).resize(function(){
    if ($(window).width() > 660) {
      $("nav").show();
    } else {
      $("nav").hide();
    }
  });
});
