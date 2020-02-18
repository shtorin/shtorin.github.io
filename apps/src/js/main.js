(function() {
	var bannerContainer = $('#bannerContainer');
	var banner = bannerContainer.find('.banner');
	var bannerImage = banner.find('img');
	var timer = bannerContainer.find('.timer').find('span');
	var closeButton = bannerContainer.find('.banner-close');

	var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();
	var	screenHeight = window.innerHeight ? window.innerHeight : $(window).height();

	$.ajax({
		type: "GET",
		url: "server.php?screenWidth=" + screenWidth + "&screenHeight=" + screenHeight,
		dataType: "json",
		contentType: "application/json; encoding=utf-8",
		success: function (data) {

			banner.attr('href', data.url);
			bannerImage.attr('src', data.image);

		}
	});

	closeButton.on('click', function() {
		bannerContainer.fadeOut(200);
	});

	var time = 10;

	setInterval(function() {
		time--;

		if (time >= 0) {
			timer.text(time);
		} else {
			bannerContainer.fadeOut(200);
		}
	}, 1000);
})();













