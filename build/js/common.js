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
	$('.btn-more').on('click', function() {
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top - 100
		}, 500);
		return false;
	});
	//TABS
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
	$(".js-open-popup").on("click", function(){
		$("body").addClass('is-hidden');
		var link = $(this).data('link');
		var popup = $('.js-popup[data-popup="' + link + '"]');
		popup.addClass('is-active');
		return false;
	});
	$(".js-close").on("click", function(){
		$(this).parents(".js-popup").removeClass('is-active');
		$("body").removeClass('is-hidden');
	});
	$(".js-open-popup").on("click", function(){
		//SLIDER
		$('.gallery').slick({
			slidesToShow: 1,
			dots: true,
			customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a>'+(i+1)+'</a>';
			}
		});
	});
	$(".js-plan").on("click", function(){
		var width = $(window).width()
		if( width < 1100) {
			$("body").addClass('is-hidden');
			$('.js-popup-plan').addClass('is-active');
		}
	});
	$(".js-closed").on("click", function(){
		$(this).parents(".js-popup-plan").removeClass('is-active');
		$("body").removeClass('is-hidden');
	});
	//MAP
	var map;
	function initMap() {

		var myLatLng = {lat: 50.49836018, lng: 30.36530972};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 11,
			center: myLatLng,
			disableDefaultUI: true,
			draggable: false,
			// mapTypeControl: false,
			// streetViewControl: false,
			scrollwheel: false,
			// zoomControl : false,
			
		});

		var marker = new google.maps.Marker({
			position: {lat: 50.4656456, lng: 30.3667208},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-metro.png'
		});

		// var marker2 = new google.maps.Marker({
		// 	position: {lat: 50.5514728, lng: 30.2050533},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-pharmacy.png'
		// });

		// var marker3 = new google.maps.Marker({
		// 	position: {lat: 50.544592, lng: 30.158712},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-hospital.png'
		// });

		// var marker4 = new google.maps.Marker({
		// 	position: {lat: 50.545778, lng: 30.214521},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-gum.png'
		// });

		// var marker5 = new google.maps.Marker({
		// 	position: {lat: 50.5487424, lng: 30.2168112},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-gum.png'
		// });

		// var marker6 = new google.maps.Marker({
		// 	position: {lat: 50.5531624, lng: 30.2173778},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-gum.png'
		// });

		// var marker7 = new google.maps.Marker({
		// 	position: {lat: 50.5514786, lng: 30.2050697},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-beaty.png'
		// });

		// var marker8 = new google.maps.Marker({
		// 	position: {lat: 50.5492584, lng: 30.1970628},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-shop-center.png'
		// });

		// var marker9 = new google.maps.Marker({
		// 	position: {lat: 50.5525366, lng: 30.2065499},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-beaty.png'
		// });

		// var marker10 = new google.maps.Marker({
		// 	position: {lat: 50.5509878, lng: 30.215007},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-shop-center.png'
		// });

		// var marker11 = new google.maps.Marker({
		// 	position: {lat: 50.5454867, lng: 30.1937338},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-transport.png'
		// });

		// var marker12 = new google.maps.Marker({
		// 	position: {lat: 50.5419135, lng: 30.1917922},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-beaty.png'
		// });

		// var marker13 = new google.maps.Marker({
		// 	position: {lat: 50.5492584, lng: 30.1970628},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-shop.png'
		// });

		// var marker14 = new google.maps.Marker({
		// 	position: {lat: 50.5492584, lng: 30.1970628},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-beaty.png'
		// });

		// var marker15 = new google.maps.Marker({
		// 	position: {lat: 50.5454867, lng: 30.1937338},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-beaty.png'
		// });

		// var marker16 = new google.maps.Marker({
		// 	position: {lat: 50.541052, lng: 30.1818983},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-school.png'
		// });

		// var marker17 = new google.maps.Marker({
		// 	position: {lat: 50.548884, lng: 30.1567969},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-school.png'
		// });

		// var marker18 = new google.maps.Marker({
		// 	position: {lat: 50.53611, lng: 30.1970628},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	icon: 'img/marker-school.png'
		// });

		// var marker19 = new google.maps.Marker({
		// 	position: {lat: 50.5525366, lng: 30.159019},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	iicon: 'img/marker-school.png'
		// });

		// var marker20 = new google.maps.Marker({
		// 	position: {lat: 50.5528028, lng: 30.2053266},
		// 	map: map,
		// 	title: 'Click to zoom!',
		// 	iicon: 'img/marker-school.png'
		// });

		map.addListener('center_changed', function() {
			// 3 seconds after the center of the map has changed, pan back to the
			// marker.

			window.setTimeout(function() {
			  map.panTo(marker.getPosition());
			}, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker2.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker3.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker4.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker5.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker6.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker7.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker8.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker9.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker10.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker11.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker12.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker13.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker14.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker15.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker16.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker17.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker18.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker19.getPosition());
			// }, 3000);

			// window.setTimeout(function() {
			//   map.panTo(marker20.getPosition());
			// }, 3000);
		});

		marker.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker.getPosition());
		});

		// marker2.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker2.getPosition());
		// });

		// marker3.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker3.getPosition());
		// });

		// marker4.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker4.getPosition());
		// });

		// marker5.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker5.getPosition());
		// });

		// marker6.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker6.getPosition());
		// });

		// marker7.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker7.getPosition());
		// });

		// marker8.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker8.getPosition());
		// });

		// marker9.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker9.getPosition());
		// });

		// marker10.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker10.getPosition());
		// });

		// marker11.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker11.getPosition());
		// });

		// marker12.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker12.getPosition());
		// });

		// marker13.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker13.getPosition());
		// });

		// marker14.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker14.getPosition());
		// });

		// marker15.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker15.getPosition());
		// });

		// marker16.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker16.getPosition());
		// });

		// marker17.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker17.getPosition());
		// });

		// marker18.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker18.getPosition());
		// });

		// marker19.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker19.getPosition());
		// });

		// marker20.addListener('click', function() {
		// 	map.setZoom(16);
		// 	map.setCenter(marker20.getPosition());
		// });

	}
	initMap();
});