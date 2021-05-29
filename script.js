$(function () {

	// автоматическое перемещение к началу страницы
	var smoothJumpUp = function () {
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			window.scrollBy(0, -50);
			setTimeout(smoothJumpUp, 10);
		}
	}

	// показ и скрытие прокрутки от положения
	window.onscroll = function () {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 100) {
			document.getElementById('upbutton').style.display = 'block';
		} else {
			document.getElementById('upbutton').style.display = 'none';
		}
	}





	// Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});



	// Menu nav_toggle

	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});




});