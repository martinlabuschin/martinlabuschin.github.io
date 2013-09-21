jQuery(document).ready(function(){
  if(!Modernizr.touch){ 
    jQuery.stellar();
    

    var header = jQuery('header');
    var offset = header.offset();

    var left = offset.left;
    jQuery("header .logo").css("left", left);


    jQuery("header img").click(function() {
      jQuery('html, body').animate({
        scrollTop: 0
      }, 'slow');
      return false;
    });

    var _image = new Image();
    _image.src = "/images/background.gif";

    jQuery(_image).load(function () {
      jQuery('.header_wrapper').animate({ opacity: 1 }, { duration: 1000 });
      jQuery(".prologue").delay(1000).animate({opacity: 1, top: 0},1000);
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