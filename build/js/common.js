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
	$('.tabs__control-link').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.tabs__controls-item'),
			contentItem = $('.tabs__item'),
			itemPosition = item.index();

		contentItem.eq(itemPosition)
			.add(item)
			.addClass('is-active')
			.siblings()
			.removeClass('is-active');
	});
	$(".js-popup").on("click", function(){
			$(".popup").toggleClass('is-active');
		});

		$(".js-close").on("click", function(){
			$(".popup").removeClass('is-active');
		});
});