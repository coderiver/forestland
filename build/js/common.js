$(document).ready(function() {
	$('.js-slide-banner').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 1,
	});
	$('.slider-room').slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			},
		 ]
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
	//mask
	$('[type="tel"]').mask("+99 (999) 999 - 99 - 99");
	//validate
	var validateForm = $('.js-validate');
	validateForm.each(function() {
		var thisForm = $(this);
		$.validate({
			form: thisForm
		});
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

		$('.slider-room').slick('unslick');

		$('.slider-room').slick({
			arrows: true,
			slidesToShow: 3,
		});
	});
	$(".js-open-popup").on("click", function(){
		$("body").addClass('is-hidden');
		var link = $(this).data('link');
		var popup = $('.js-popup[data-popup="' + link + '"]');
		popup.addClass('is-active');
		//SLIDER
		$('.gallery').slick({
			slidesToShow: 1,
			dots: true,
			customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a>'+(i+1)+'</a>';
			}
		});
		return false;
	});
	$(".js-close").on("click", function(){
		$(this).parents(".js-popup").removeClass('is-active');
		$('.gallery').slick('unslick');
		$("body").removeClass('is-hidden');
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



	// function initMap() {
	//   var map = new google.maps.Map(document.getElementById('map'), {
	//     zoom: 11,
	//     center: {lat: 50.49836018, lng: 30.36530972}
	//   });

	//   setMarkers(map);
	// }


	// // Data for the markers consisting of a name, a LatLng and a zIndex for the
	// // order in which these markers should display on top of each other.
	// var places = [
	//   ['Bondi Beach', 50.4656456, 30.3667208, 1],
	//   ['Coogee Beach', 50.5514728, 30.2050533, 2],
	//   ['Cronulla Beach', 50.544592, 30.158712, 3],
	//   ['Manly Beach', 50.545778, 30.214521, 4],
	//   ['Maroubra Beach', 50.5487424, 30.2168112, 5]
	// ];


	// function setMarkers(map) {
	//   // Adds markers to the map.

	//   // Marker sizes are expressed as a Size of X,Y where the origin of the image
	//   // (0,0) is located in the top left of the image.

	//   // Origins, anchor positions and coordinates of the marker increase in the X
	//   // direction to the right and in the Y direction down.
	//   var image = {
	//     url: 'img/marker-metro.png',
	//     // This marker is 20 pixels wide by 32 pixels high.
	//     size: new google.maps.Size(20, 32),
	//     // The origin for this image is (0, 0).
	//     origin: new google.maps.Point(0, 0),
	//     // The anchor for this image is the base of the flagpole at (0, 32).
	//     anchor: new google.maps.Point(0, 32)
	//   };
	//   // Shapes define the clickable region of the icon. The type defines an HTML
	//   // <area> element 'poly' which traces out a polygon as a series of X,Y points.
	//   // The final coordinate closes the poly by connecting to the first coordinate.
	//   var shape = {
	//     coords: [1, 1, 1, 20, 18, 20, 18, 1],
	//     type: 'poly'
	//   };
	//   for (var i = 0; i < places.length; i++) {
	//     var place = places[i];
	//     var marker = new google.maps.Marker({
	//       position: {lat: place[1], lng: place[2]},
	//       map: map,
	//       icon: image,
	//       shape: shape,
	//       title: place[0],
	//       zIndex: place[3]
	//     });
	//   }
	// }

	// initMap();

	// MAP
	var map;
	function initMap() {

		var myLatLng = {lat: 50.49836018, lng: 30.36530972};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 11,
			center: myLatLng,
			disableDefaultUI: true,
			// draggable: false,
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

		var marker2 = new google.maps.Marker({
			position: {lat: 50.5514728, lng: 30.2050533},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-pharmacy.png'
		});

		var marker3 = new google.maps.Marker({
			position: {lat: 50.544592, lng: 30.158712},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-hospital.png'
		});

		var marker4 = new google.maps.Marker({
			position: {lat: 50.545778, lng: 30.214521},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-gum.png'
		});

		var marker5 = new google.maps.Marker({
			position: {lat: 50.5487424, lng: 30.2168112},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-gum.png'
		});

		var marker6 = new google.maps.Marker({
			position: {lat: 50.5531624, lng: 30.2173778},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-gum.png'
		});

		var marker7 = new google.maps.Marker({
			position: {lat: 50.5514786, lng: 30.2050697},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-beaty.png'
		});

		var marker8 = new google.maps.Marker({
			position: {lat: 50.5492584, lng: 30.1970628},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-shop-center.png'
		});

		var marker9 = new google.maps.Marker({
			position: {lat: 50.5525366, lng: 30.2065499},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-beaty.png'
		});

		var marker10 = new google.maps.Marker({
			position: {lat: 50.5509878, lng: 30.215007},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-shop-center.png'
		});

		var marker11 = new google.maps.Marker({
			position: {lat: 50.5454867, lng: 30.1937338},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-transport.png'
		});

		var marker12 = new google.maps.Marker({
			position: {lat: 50.5419135, lng: 30.1917922},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-beaty.png'
		});

		var marker13 = new google.maps.Marker({
			position: {lat: 50.5492584, lng: 30.1970628},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-shop.png'
		});

		var marker14 = new google.maps.Marker({
			position: {lat: 50.5492584, lng: 30.1970628},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-beaty.png'
		});

		var marker15 = new google.maps.Marker({
			position: {lat: 50.5454867, lng: 30.1937338},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-beaty.png'
		});

		var marker16 = new google.maps.Marker({
			position: {lat: 50.541052, lng: 30.1818983},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-school.png'
		});

		var marker17 = new google.maps.Marker({
			position: {lat: 50.548884, lng: 30.1567969},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-school.png'
		});

		var marker18 = new google.maps.Marker({
			position: {lat: 50.53611, lng: 30.1970628},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-school.png'
		});

		var marker19 = new google.maps.Marker({
			position: {lat: 50.5525366, lng: 30.159019},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-school.png'
		});

		var marker20 = new google.maps.Marker({
			position: {lat: 50.5528028, lng: 30.2053266},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/marker-school.png'
		});


		marker.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker.getPosition());
		});

		marker2.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker2.getPosition());
		});

		marker3.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker3.getPosition());
		});

		marker4.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker4.getPosition());
		});

		marker5.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker5.getPosition());
		});

		marker6.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker6.getPosition());
		});

		marker7.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker7.getPosition());
		});

		marker8.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker8.getPosition());
		});

		marker9.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker9.getPosition());
		});

		marker10.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker10.getPosition());
		});

		marker11.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker11.getPosition());
		});

		marker12.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker12.getPosition());
		});

		marker13.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker13.getPosition());
		});

		marker14.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker14.getPosition());
		});

		marker15.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker15.getPosition());
		});

		marker16.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker16.getPosition());
		});

		marker17.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker17.getPosition());
		});

		marker18.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker18.getPosition());
		});

		marker19.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker19.getPosition());
		});

		marker20.addListener('click', function() {
			map.setZoom(16);
			map.setCenter(marker20.getPosition());
		});

	}
	initMap();
});