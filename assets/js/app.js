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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZsaXAuanMiLCJwYXJhbGxheC5qcyIsIm1haW5tZW51LmpzIiwicHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblx0c3ZnNGV2ZXJ5Ym9keSgpOyAvL2ZvciBTVkctZWxlbWVudHMgaW4gSUVcclxufSkoKTtcclxuIiwiLy9GbGlwIGVmZmVjdFxyXG4oZnVuY3Rpb24oKSB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgXHRsZXQgYXV0aG9yaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemVcIiksXHJcblx0XHRcdGZsaXBDbGFzcyA9IFwiZmxpcHBlclwiO1xyXG5cclxuXHRcdC8vbG9naW4gZm9ybVxyXG5cdFx0aWYoYXV0aG9yaXplKSB7XHJcblx0XHRcdGF1dGhvcml6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcnVuRmxpcCk7XHJcblxyXG5cdFx0XHQvL9C/0LXRgNC10LLQtdGA0L3Rg9GC0Ywg0LrQsNGA0YLRgyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0LXQtVxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYoIWUpIGUgPSB3aW5kb3cuZXZlbnQ7XHJcblx0XHRcdFx0bGV0IGVsZW1zID0gZS5wYXRoLFxyXG5cdFx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYoZWxlbXNbaV0uaWQgPT09IFwiYXV0aG9yaXplXCIgfHwgZWxlbXNbaV0uaWQgPT09IFwibG9naW5cIikge1xyXG5cdFx0XHRcdFx0XHRmbGFnID0gZmFsc2U7XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGZsYWcpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIikuY2xhc3NMaXN0LnJlbW92ZShmbGlwQ2xhc3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdC8vZmxpcCBlZmZlY3RcclxuXHRcdGZ1bmN0aW9uIHJ1bkZsaXAoKSB7XHJcblx0XHRcdGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhc2V0LmZsaXBJZCksXHJcblx0XHRcdFx0Y2xhc3NlcyA9IGVsZW0uY2xhc3NMaXN0O1xyXG5cclxuXHRcdFx0Y2xhc3Nlcy5jb250YWlucyhmbGlwQ2xhc3MpID09PSB0cnVlID8gY2xhc3Nlcy5yZW1vdmUoZmxpcENsYXNzKSA6IGNsYXNzZXMuYWRkKGZsaXBDbGFzcyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pKCk7XHJcbiIsIi8vUGFyYWxsYXhcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBsYXllcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFyYWxsYXhfX2xheWVyXCIpLFxyXG5cdHBhcmFsbGF4O1xyXG5cclxuXHRsZXQgbW92ZUxhZXJzID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0ZSA9IGUgfHwgZXZlbnQ7XHJcblxyXG5cdFx0bGV0IGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBlLnBhZ2VYLFxyXG5cdFx0XHRpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgZGl2aWRlcjtcclxuXHJcblx0XHRcdGlmKGxheWVycy5sZW5ndGggPj0gNSkgZGl2aWRlciA9IGkgLyAxMDA7XHJcblx0XHRcdGVsc2UgZGl2aWRlciA9IChpICsgMSkgLyAxMDA7XHJcblxyXG5cdFx0XHRsZXQgWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuXHRcdFx0XHRZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxyXG5cdFx0XHRcdHRyYW5zZm9ybVN0eWxlID0gXCJ0cmFuc2xhdGUzZChcIiArIFggKyBcInB4LCBcIiArIFkgKyBcInB4LCBcIiArIFwiMClcIjtcclxuXHJcblx0XHRcdGxheWVyc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHlsZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlTGFlcnMpO1xyXG59O1xyXG4iLCIvL01haW4gbWVudVxyXG4vL2pRdWVyeVxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdCQoJyN0b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoYW1idXJnZXJfb24nKTtcclxuXHRcdCQoJyNtYWluLW1lbnUnKS50b2dnbGVDbGFzcygnbWFpbi1tZW51X3RhcmdldCcpO1xyXG5cdH0pO1xyXG59KTtcclxuIiwiLy9QcmVsb2FkZXJcclxuLy9qUXVlcnlcclxubGV0IHByZWxvYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcblx0bGV0IHBlcmNlbnRzID0gMCxcclxuXHRcdHByZWxvYWRlciA9ICQoXCIjcHJlbG9hZGVyXCIpO1xyXG5cclxuXHRsZXQgaW1nUGF0aCA9ICQoXCIqXCIpLm1hcChmdW5jdGlvbiAoaSwgZWwpIHtcclxuXHRcdGxldCBiZyA9ICQoZWwpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiksXHJcblx0XHRcdGltZyA9ICQoZWwpLmlzKFwiaW1nXCIpLFxyXG5cdFx0XHRwYXRoID0gXCJcIjtcclxuXHJcblx0XHRpZiAoYmcgIT0gXCJub25lXCIpIHtcclxuXHRcdFx0cGF0aCA9IGJnLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpbWcpIHtcclxuXHRcdFx0cGF0aCA9ICQoZWwpLmF0dHIoXCJzcmNcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHBhdGgpIHJldHVybiBwYXRoO1xyXG5cdH0pO1xyXG5cclxuXHRsZXQgc2V0UGVyY2VudHMgPSBmdW5jdGlvbiAodG90YWwsIGN1cnJlbnQpIHtcclxuXHRcdGxldCBwZXJzZW50cyA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cclxuXHRcdCQoXCIjcGVyY3JudHNcIikudGV4dChwZXJzZW50cyk7XHJcblxyXG5cdFx0aWYgKHBlcnNlbnRzID49IDEwMCkge1xyXG5cdFx0XHRwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGV0IGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1hZ2VzKSB7XHJcblxyXG5cdFx0aWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuXHRcdGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcsIGksIGltYWdlcykge1xyXG5cdFx0XHRsZXQgZmFrZUltYWdlID0gJChcIjxpbWc+XCIsIHtcclxuXHRcdFx0XHRhdHRyOiB7XHJcblx0XHRcdFx0XHRzcmM6IGltZ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRmYWtlSW1hZ2Uub24oXCJsb2FkIGVycm9yXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRwZXJjZW50cysrO1xyXG5cdFx0XHRcdHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG5cdFx0XHRsb2FkSW1hZ2VzKGltZ3MpO1xyXG5cdFx0fVxyXG5cdH1cclxufSgpKTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHRwcmVsb2FkZXIuaW5pdCgpO1xyXG59KTtcclxuIl19
