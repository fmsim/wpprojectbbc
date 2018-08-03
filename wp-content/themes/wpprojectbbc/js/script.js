//Toggle Navigation

$(function(){
   
    $(".ion-arrow-down-b").click(function(){
        $("#toggle").slideToggle();
    });
    
});



////FancyBox
$(document).ready(function() {

	$(".iframe").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});