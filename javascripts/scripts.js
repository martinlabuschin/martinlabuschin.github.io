jQuery(document).ready(function(){
  if(!Modernizr.touch){ 
    jQuery.stellar();
    

    var header = jQuery('header');
    var offset = header.offset();
    var left = offset.left;
    jQuery("header .logo").css("left", left);


    var logo = jQuery('header img');
    var logo_offset = header.offset();
    var logo_left = logo_offset.left;
    jQuery("body").append(jQuery("header img").clone().addClass("clone").css("left", logo_left+20));
    jQuery('header img').css("opacity", 0);

    jQuery("header img, .clone").click(function() {
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
       if($(window).scrollTop()<10){
             divs.fadeIn("fast");
       } else {
             divs.fadeOut("fast");
       }
    });
  } 
});