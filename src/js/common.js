$(document).ready(function() {
	$('.js-slide-banner').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 1,
	});
	$(window).on('scroll', function() {
		if($(window).width() > 1365) {
			if($(window).scrollTop() > 0) {
				$(".header__logo").removeClass('header__logo_big');
			} else {
				$(".header__logo").addClass('header__logo_big');
			}
		}
	});
	$('.js-humb').on('click', function() {
		$('.header__nav-mob').toggleClass('is-visible');
	});
});