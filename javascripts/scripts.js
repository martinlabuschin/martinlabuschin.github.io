jQuery(document).ready(function(){
  if(!Modernizr.touch){ 
    jQuery.stellar();
  }
  jQuery('body').scrollspy({ target: '#navbar-wrapper' });

  jQuery("navigation a").click(function() {
  		jQuery('html,body').animate({
  		  scrollTop: jQuery(jQuery(this).attr("href")).offset().top
  		}, 'slow');
  	  return false;
    });
});