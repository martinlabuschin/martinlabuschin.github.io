jQuery(document).ready(function(){
  jQuery('header img').attr("style","");
  jQuery('header img').show();

  if(!Modernizr.touch){ 
    jQuery.stellar();
    jQuery('header img').css("opacity", 0);
    jQuery("body").append(jQuery("header img").clone().addClass("clone"));

    reposition_logo();    

    jQuery(window).resize(function(){
      reposition_logo(); 
    });

    jQuery("header img, .clone").click(function() {
      jQuery('html, body').animate({
        scrollTop: 0
      }, 'slow');
      return false;
    });

    var _image = new Image();
    _image.src = "http://martinlabuschin-github-page.s3.amazonaws.com/background.gif";

    jQuery(_image).load(function () {
      jQuery('.header_wrapper').animate({ opacity: 1 }, { duration: 1000 });
      jQuery(".prologue").delay(500).animate({opacity: 1, top: 0},1000);
    });

    var divs = $('h1, .jump_to_contact');
    $(window).scroll(function(){
       if($(window).scrollTop()<10){
             divs.fadeIn("fast");
       } else {
             divs.fadeOut("fast");
       }
    });
  } 
});

function reposition_logo() {
  var header = jQuery('.prologue');
  var offset = header.offset();
  var left = offset.left;
  jQuery("header .logo").css("left", left-20);
  var logo = jQuery('header img');
  var logo_offset = logo.offset();
  var logo_left = logo_offset.left;
  jQuery(".clone").css("left", logo_left-40);
  jQuery(".jump_to_contact").css("right", left);
  jQuery(".clone").css("opacity", 1);
}