jQuery(document).ready(function(){
  jQuery(window).stellar();
  
  resize_height();
  
  $(window).resize(function(){
    resize_height();
  });
  
  jQuery("navigation a").click(function() {
  		jQuery('html,body').animate({
  		  scrollTop: jQuery(jQuery(this).attr("href")).offset().top
  		}, 'slow');
  	  return false;
    });
});

function resize_height() {
  jQuery(".masthead").css("height", ((jQuery(window).height()/100)*70)+"px");
  jQuery("navigation ul").css("top", ((jQuery(".masthead").height()/100)*50)+"px");
}
