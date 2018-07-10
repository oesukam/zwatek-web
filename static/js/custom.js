(function ($) {

	"use strict";
  console.log('iiin')
	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$(".loader-wrapper").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				// Parallax init
				if($('.parallax').length){
					$('.parallax').parallax({
						imageSrc: 'assets/images/photos/parallax.jpg',
						zIndex: '1'
					});
				}
				$(".loader-wrapper").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});



	// Header Scrolling Set White Background
	$(window).on('scroll', function() {
    var width = $(window).width();
    console.log('uuuu')
		if(width > 991) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
				$(".header-area .dark-logo").css('display', 'block');
				$(".header-area .light-logo").css('display', 'none');
			}else{
				$(".header-area").removeClass("header-sticky");
				$(".header-area .dark-logo").css('display', 'none');
				$(".header-area .light-logo").css('display', 'block');
			}
		}
	});


})(window.$);
