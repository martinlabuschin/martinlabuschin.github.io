$(document).ready(function(){
  $(".section").hide();
  $("#navigation a").click(function(){
    $(".section").slideUp("fast");
    $($(this).attr("href")).slideDown("fast");
    $("#navigation a").removeClass("active");
    $(this).addClass("active");
    return false;
  });
  $("#navigation a:first").trigger("click");
});
