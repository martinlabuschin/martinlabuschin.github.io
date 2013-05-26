$(document).ready(function(){
  $(".section").hide();
  
  $("#navigation a").click(function(){
    $(".section").hide();
    $($(this).attr("href")).show();
    $("#navigation a").removeClass("active");
    $(this).addClass("active");
    return false;
  });
  
  $("#navigation a:first").trigger("click");
});