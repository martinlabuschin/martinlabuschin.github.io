$(document).ready(function(){
  $(".section").hide();
  
  $("#navigation a").click(function(){
    $(".section").hide();
    $($(this).attr("href")).show();
    return false;
  });
  
  $("#navigation a:first").trigger("click");
});