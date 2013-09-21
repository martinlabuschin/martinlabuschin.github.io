jQuery(document).ready(function(){
  if(!Modernizr.touch){ 
    jQuery.stellar();
    

    var header = jQuery('header');
    var offset = header.offset();

    var left = offset.left;
    jQuery("header .logo").css("left", left);

    jQuery(".prologue").animate({opacity: 1, top: 0},1000);

    jQuery("header img").click(function() {
      jQuery('html, body').animate({
        scrollTop: 0
      }, 'slow');
      return false;
    });



    var divs = $('h1');
    $(window).scroll(function(){
       if($(window).scrollTop()<100){
             divs.fadeIn("fast");
       } else {
             divs.fadeOut("fast");
       }
    });
  } 
});