(function($) {
	'use strict';
	jQuery(document).ready(function(){

		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:5,
		    nav:false,
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:2
		        }
		    }
		});

	});

})(jQuery);	