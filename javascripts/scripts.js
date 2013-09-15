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
  
  total_height = ((jQuery(window).height()/100)*80);
  
  jQuery(".masthead .row").css("height", (total_height)+"px");
  jQuery(".masthead .row").css("padding-top", (total_height/2)+"px");
}
