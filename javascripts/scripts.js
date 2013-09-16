jQuery(document).ready(function(){
  
  jQuery("navigation a").click(function() {
  		jQuery('html,body').animate({
  		  scrollTop: jQuery(jQuery(this).attr("href")).offset().top
  		}, 'slow');
  	  return false;
    });
});