"use strict";

(function() {
	svg4everybody(); //for SVG-elements in IE
})();

//Flip effect
(function() {
	document.addEventListener("DOMContentLoaded", function() {

    	let authorize = document.getElementById("authorize"),
			flipClass = "flipper";

		//login form
		if(authorize) {
			authorize.addEventListener("click", runFlip);

			//перевернуть карту при клике вне ее
			document.body.addEventListener("click", function(e) {
				if(!e) e = window.event;
				let elems = e.path,
					flag = true;

				for(let i = 0; i < elems.length; i++) {
					if(elems[i].id === "authorize" || elems[i].id === "login") {
						flag = false;	
					}
				}

				if(flag) document.getElementById("login").classList.remove(flipClass);
			});
		}
		

		//flip effect
		function runFlip() {
			let elem = document.getElementById(this.dataset.flipId),
				classes = elem.classList;

			classes.contains(flipClass) === true ? classes.remove(flipClass) : classes.add(flipClass);
		}
	});
})();

//Parallax
window.onload = function() {
	let layers = document.getElementsByClassName("parallax__layer"),
	parallax;

	let moveLaers = function(e) {
		e = e || event;

		let initialX = (window.innerWidth / 2) - e.pageX,
			initialY = (window.innerHeight / 2) - e.pageY;

		for(let i = 0; i < layers.length; i++) {
			let divider;

			if(layers.length >= 5) divider = i / 100;
			else divider = (i + 1) / 100;

			let X = initialX * divider,
				Y = initialY * divider,
				transformStyle = "translate3d(" + X + "px, " + Y + "px, " + "0)";

			layers[i].style.transform = transformStyle;
		}
	};

	window.addEventListener("mousemove", moveLaers);
};

//Main menu
//jQuery
$(function() {
	$('#toggle').on('click', function () {
		$(this).toggleClass('hamburger_on');
		$('#main-menu').toggleClass('main-menu_target');
	});
});

//Preloader
//jQuery
let preloader = (function () {
	let percents = 0,
		preloader = $("#preloader");

	let imgPath = $("*").map(function (i, el) {
		let bg = $(el).css("background-image"),
			img = $(el).is("img"),
			path = "";

		if (bg != "none") {
			path = bg.replace('url("', '').replace('")', '');;
		}

		if (img) {
			path = $(el).attr("src");
		}

		if (path) return path;
	});

	let setPercents = function (total, current) {
		let persents = Math.ceil(current / total * 100);

		$("#percrnts").text(persents);

		if (persents >= 100) {
			preloader.fadeOut();
		}
	}

	let loadImages = function (images) {

		if (!images.length) preloader.fadeOut();

		images.forEach(function (img, i, images) {
			let fakeImage = $("<img>", {
				attr: {
					src: img
				}
			});

			fakeImage.on("load error", function () {
				percents++;
				setPercents(images.length, percents);
			});
		});
	}

	return {
		init: function () {
			let imgs = imgPath.toArray();

			loadImages(imgs);
		}
	}
}());


$(function () {
	preloader.init();
});

//Sidebar
//jQuery
let scrollSidebar = (function() {
	let sidebar = $(".sidebar"),
		menu = $(".sidebar-nav"),
		link = $(".sidebar__link"),
		article = $(".article"),
		body = document.body,
		isPositionArticle = [],
		offsetHeight = $(".blog__content")[0].offsetTop - $(".main")[0].offsetTop;

	let positionArticle = function(el) {
		for(let i = 0; i < el.length; i++) {
			isPositionArticle[i] = {};
			isPositionArticle[i].top = el
				.eq(i)
          		.offset()
          		.top - offsetHeight;
			isPositionArticle[i].bottom = isPositionArticle[i].top + el
				.eq(i)
				.innerHeight();
		}
	};

	let menuFixed = function() {
		let scroll = window.pageYOffset;

		if(scroll < article.offset().top) {
			sidebar.removeClass("fixed");
			$(".blog__content").removeClass("nav-fixed");
		}
		else {
			sidebar.addClass("fixed");
			$(".blog__content").addClass("nav-fixed");
		}
	};

	let scrollPage = function (e) {
		let scroll = window.pageYOffset;

		for (let i = 0; i < isPositionArticle.length; i++) {
			if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
				link
					.eq(i)
					.addClass("sidebar__link_active")
					.siblings()
					.removeClass("sidebar__link_active");
			}
		}
	};

	let clickOnMenu = function (e) {
		let index = $(e.target).index();
		let sectionOffset = article
			.eq(index)
			.offset()
			.top;
		$(document).off("scroll", scrollPage);
		$("body, html").animate({
			"scrollTop": sectionOffset
		}, function () {
			$(e.target)
				.addClass("sidebar__link_active")
				.siblings()
				.removeClass("sidebar__link_active");
			$(document).on("scroll", scrollPage);
		});
	};

	let addListener = function () {
		$(menu).on("click", clickOnMenu);

		$(document).on("scroll", scrollPage);
		$(document).on("scroll", menuFixed);

		$(window).on("load", function (e) {
			positionArticle(article);
		})

		$(window).on("resize", function (e) {
			positionArticle(article);
		})
	}

	return {
		init: addListener
	}
})();

scrollSidebar.init();



//toggle class 
$(function() {
	$("#btn").on("click", function () {
		$("#blog").toggleClass("on");
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZsaXAuanMiLCJwYXJhbGxheC5qcyIsIm1haW5tZW51LmpzIiwicHJlbG9hZGVyLmpzIiwic2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHRzdmc0ZXZlcnlib2R5KCk7IC8vZm9yIFNWRy1lbGVtZW50cyBpbiBJRVxyXG59KSgpO1xyXG4iLCIvL0ZsaXAgZWZmZWN0XHJcbihmdW5jdGlvbigpIHtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBcdGxldCBhdXRob3JpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6ZVwiKSxcclxuXHRcdFx0ZmxpcENsYXNzID0gXCJmbGlwcGVyXCI7XHJcblxyXG5cdFx0Ly9sb2dpbiBmb3JtXHJcblx0XHRpZihhdXRob3JpemUpIHtcclxuXHRcdFx0YXV0aG9yaXplLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBydW5GbGlwKTtcclxuXHJcblx0XHRcdC8v0L/QtdGA0LXQstC10YDQvdGD0YLRjCDQutCw0YDRgtGDINC/0YDQuCDQutC70LjQutC1INCy0L3QtSDQtdC1XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZighZSkgZSA9IHdpbmRvdy5ldmVudDtcclxuXHRcdFx0XHRsZXQgZWxlbXMgPSBlLnBhdGgsXHJcblx0XHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZihlbGVtc1tpXS5pZCA9PT0gXCJhdXRob3JpemVcIiB8fCBlbGVtc1tpXS5pZCA9PT0gXCJsb2dpblwiKSB7XHJcblx0XHRcdFx0XHRcdGZsYWcgPSBmYWxzZTtcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoZmxhZykgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5jbGFzc0xpc3QucmVtb3ZlKGZsaXBDbGFzcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblxyXG5cdFx0Ly9mbGlwIGVmZmVjdFxyXG5cdFx0ZnVuY3Rpb24gcnVuRmxpcCgpIHtcclxuXHRcdFx0bGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQuZmxpcElkKSxcclxuXHRcdFx0XHRjbGFzc2VzID0gZWxlbS5jbGFzc0xpc3Q7XHJcblxyXG5cdFx0XHRjbGFzc2VzLmNvbnRhaW5zKGZsaXBDbGFzcykgPT09IHRydWUgPyBjbGFzc2VzLnJlbW92ZShmbGlwQ2xhc3MpIDogY2xhc3Nlcy5hZGQoZmxpcENsYXNzKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSkoKTtcclxuIiwiLy9QYXJhbGxheFxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGxheWVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYXJhbGxheF9fbGF5ZXJcIiksXHJcblx0cGFyYWxsYXg7XHJcblxyXG5cdGxldCBtb3ZlTGFlcnMgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRlID0gZSB8fCBldmVudDtcclxuXHJcblx0XHRsZXQgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIGUucGFnZVgsXHJcblx0XHRcdGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gZS5wYWdlWTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBkaXZpZGVyO1xyXG5cclxuXHRcdFx0aWYobGF5ZXJzLmxlbmd0aCA+PSA1KSBkaXZpZGVyID0gaSAvIDEwMDtcclxuXHRcdFx0ZWxzZSBkaXZpZGVyID0gKGkgKyAxKSAvIDEwMDtcclxuXHJcblx0XHRcdGxldCBYID0gaW5pdGlhbFggKiBkaXZpZGVyLFxyXG5cdFx0XHRcdFkgPSBpbml0aWFsWSAqIGRpdmlkZXIsXHJcblx0XHRcdFx0dHJhbnNmb3JtU3R5bGUgPSBcInRyYW5zbGF0ZTNkKFwiICsgWCArIFwicHgsIFwiICsgWSArIFwicHgsIFwiICsgXCIwKVwiO1xyXG5cclxuXHRcdFx0bGF5ZXJzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0eWxlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVMYWVycyk7XHJcbn07XHJcbiIsIi8vTWFpbiBtZW51XHJcbi8valF1ZXJ5XHJcbiQoZnVuY3Rpb24oKSB7XHJcblx0JCgnI3RvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2hhbWJ1cmdlcl9vbicpO1xyXG5cdFx0JCgnI21haW4tbWVudScpLnRvZ2dsZUNsYXNzKCdtYWluLW1lbnVfdGFyZ2V0Jyk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCIvL1ByZWxvYWRlclxyXG4vL2pRdWVyeVxyXG5sZXQgcHJlbG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHRsZXQgcGVyY2VudHMgPSAwLFxyXG5cdFx0cHJlbG9hZGVyID0gJChcIiNwcmVsb2FkZXJcIik7XHJcblxyXG5cdGxldCBpbWdQYXRoID0gJChcIipcIikubWFwKGZ1bmN0aW9uIChpLCBlbCkge1xyXG5cdFx0bGV0IGJnID0gJChlbCkuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiKSxcclxuXHRcdFx0aW1nID0gJChlbCkuaXMoXCJpbWdcIiksXHJcblx0XHRcdHBhdGggPSBcIlwiO1xyXG5cclxuXHRcdGlmIChiZyAhPSBcIm5vbmVcIikge1xyXG5cdFx0XHRwYXRoID0gYmcucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTs7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGltZykge1xyXG5cdFx0XHRwYXRoID0gJChlbCkuYXR0cihcInNyY1wiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocGF0aCkgcmV0dXJuIHBhdGg7XHJcblx0fSk7XHJcblxyXG5cdGxldCBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uICh0b3RhbCwgY3VycmVudCkge1xyXG5cdFx0bGV0IHBlcnNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblxyXG5cdFx0JChcIiNwZXJjcm50c1wiKS50ZXh0KHBlcnNlbnRzKTtcclxuXHJcblx0XHRpZiAocGVyc2VudHMgPj0gMTAwKSB7XHJcblx0XHRcdHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZXQgbG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWFnZXMpIHtcclxuXHJcblx0XHRpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblxyXG5cdFx0aW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltZywgaSwgaW1hZ2VzKSB7XHJcblx0XHRcdGxldCBmYWtlSW1hZ2UgPSAkKFwiPGltZz5cIiwge1xyXG5cdFx0XHRcdGF0dHI6IHtcclxuXHRcdFx0XHRcdHNyYzogaW1nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZha2VJbWFnZS5vbihcImxvYWQgZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHBlcmNlbnRzKys7XHJcblx0XHRcdFx0c2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IGltZ3MgPSBpbWdQYXRoLnRvQXJyYXkoKTtcclxuXHJcblx0XHRcdGxvYWRJbWFnZXMoaW1ncyk7XHJcblx0XHR9XHJcblx0fVxyXG59KCkpO1xyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdHByZWxvYWRlci5pbml0KCk7XHJcbn0pO1xyXG4iLCIvL1NpZGViYXJcclxuLy9qUXVlcnlcclxubGV0IHNjcm9sbFNpZGViYXIgPSAoZnVuY3Rpb24oKSB7XHJcblx0bGV0IHNpZGViYXIgPSAkKFwiLnNpZGViYXJcIiksXHJcblx0XHRtZW51ID0gJChcIi5zaWRlYmFyLW5hdlwiKSxcclxuXHRcdGxpbmsgPSAkKFwiLnNpZGViYXJfX2xpbmtcIiksXHJcblx0XHRhcnRpY2xlID0gJChcIi5hcnRpY2xlXCIpLFxyXG5cdFx0Ym9keSA9IGRvY3VtZW50LmJvZHksXHJcblx0XHRpc1Bvc2l0aW9uQXJ0aWNsZSA9IFtdLFxyXG5cdFx0b2Zmc2V0SGVpZ2h0ID0gJChcIi5ibG9nX19jb250ZW50XCIpWzBdLm9mZnNldFRvcCAtICQoXCIubWFpblwiKVswXS5vZmZzZXRUb3A7XHJcblxyXG5cdGxldCBwb3NpdGlvbkFydGljbGUgPSBmdW5jdGlvbihlbCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlzUG9zaXRpb25BcnRpY2xlW2ldID0ge307XHJcblx0XHRcdGlzUG9zaXRpb25BcnRpY2xlW2ldLnRvcCA9IGVsXHJcblx0XHRcdFx0LmVxKGkpXHJcbiAgICAgICAgICBcdFx0Lm9mZnNldCgpXHJcbiAgICAgICAgICBcdFx0LnRvcCAtIG9mZnNldEhlaWdodDtcclxuXHRcdFx0aXNQb3NpdGlvbkFydGljbGVbaV0uYm90dG9tID0gaXNQb3NpdGlvbkFydGljbGVbaV0udG9wICsgZWxcclxuXHRcdFx0XHQuZXEoaSlcclxuXHRcdFx0XHQuaW5uZXJIZWlnaHQoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRsZXQgbWVudUZpeGVkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdGlmKHNjcm9sbCA8IGFydGljbGUub2Zmc2V0KCkudG9wKSB7XHJcblx0XHRcdHNpZGViYXIucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcclxuXHRcdFx0JChcIi5ibG9nX19jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwibmF2LWZpeGVkXCIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHNpZGViYXIuYWRkQ2xhc3MoXCJmaXhlZFwiKTtcclxuXHRcdFx0JChcIi5ibG9nX19jb250ZW50XCIpLmFkZENsYXNzKFwibmF2LWZpeGVkXCIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGxldCBzY3JvbGxQYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdGxldCBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpc1Bvc2l0aW9uQXJ0aWNsZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoc2Nyb2xsID49IGlzUG9zaXRpb25BcnRpY2xlW2ldLnRvcCAmJiBzY3JvbGwgPD0gaXNQb3NpdGlvbkFydGljbGVbaV0uYm90dG9tKSB7XHJcblx0XHRcdFx0bGlua1xyXG5cdFx0XHRcdFx0LmVxKGkpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoXCJzaWRlYmFyX19saW5rX2FjdGl2ZVwiKVxyXG5cdFx0XHRcdFx0LnNpYmxpbmdzKClcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhcInNpZGViYXJfX2xpbmtfYWN0aXZlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0bGV0IGNsaWNrT25NZW51ID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdGxldCBpbmRleCA9ICQoZS50YXJnZXQpLmluZGV4KCk7XHJcblx0XHRsZXQgc2VjdGlvbk9mZnNldCA9IGFydGljbGVcclxuXHRcdFx0LmVxKGluZGV4KVxyXG5cdFx0XHQub2Zmc2V0KClcclxuXHRcdFx0LnRvcDtcclxuXHRcdCQoZG9jdW1lbnQpLm9mZihcInNjcm9sbFwiLCBzY3JvbGxQYWdlKTtcclxuXHRcdCQoXCJib2R5LCBodG1sXCIpLmFuaW1hdGUoe1xyXG5cdFx0XHRcInNjcm9sbFRvcFwiOiBzZWN0aW9uT2Zmc2V0XHJcblx0XHR9LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQoZS50YXJnZXQpXHJcblx0XHRcdFx0LmFkZENsYXNzKFwic2lkZWJhcl9fbGlua19hY3RpdmVcIilcclxuXHRcdFx0XHQuc2libGluZ3MoKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcyhcInNpZGViYXJfX2xpbmtfYWN0aXZlXCIpO1xyXG5cdFx0XHQkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBzY3JvbGxQYWdlKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGxldCBhZGRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdCQobWVudSkub24oXCJjbGlja1wiLCBjbGlja09uTWVudSk7XHJcblxyXG5cdFx0JChkb2N1bWVudCkub24oXCJzY3JvbGxcIiwgc2Nyb2xsUGFnZSk7XHJcblx0XHQkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBtZW51Rml4ZWQpO1xyXG5cclxuXHRcdCQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0cG9zaXRpb25BcnRpY2xlKGFydGljbGUpO1xyXG5cdFx0fSlcclxuXHJcblx0XHQkKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0cG9zaXRpb25BcnRpY2xlKGFydGljbGUpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpbml0OiBhZGRMaXN0ZW5lclxyXG5cdH1cclxufSkoKTtcclxuXHJcbnNjcm9sbFNpZGViYXIuaW5pdCgpO1xyXG5cclxuXHJcblxyXG4vL3RvZ2dsZSBjbGFzcyBcclxuJChmdW5jdGlvbigpIHtcclxuXHQkKFwiI2J0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoXCIjYmxvZ1wiKS50b2dnbGVDbGFzcyhcIm9uXCIpO1xyXG5cdH0pO1xyXG59KTsiXX0=
