"use strict";

(function() {
	svg4everybody(); //for SVG-elements in IE
})();

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZsaXAuanMiLCJwYXJhbGxheC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHN2ZzRldmVyeWJvZHkoKTsgLy9mb3IgU1ZHLWVsZW1lbnRzIGluIElFXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBcdGxldCBhdXRob3JpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6ZVwiKSxcclxuXHRcdFx0ZmxpcENsYXNzID0gXCJmbGlwcGVyXCI7XHJcblxyXG5cdFx0Ly9sb2dpbiBmb3JtXHJcblx0XHRpZihhdXRob3JpemUpIHtcclxuXHRcdFx0YXV0aG9yaXplLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBydW5GbGlwKTtcclxuXHJcblx0XHRcdC8v0L/QtdGA0LXQstC10YDQvdGD0YLRjCDQutCw0YDRgtGDINC/0YDQuCDQutC70LjQutC1INCy0L3QtSDQtdC1XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZighZSkgZSA9IHdpbmRvdy5ldmVudDtcclxuXHRcdFx0XHRsZXQgZWxlbXMgPSBlLnBhdGgsXHJcblx0XHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZihlbGVtc1tpXS5pZCA9PT0gXCJhdXRob3JpemVcIiB8fCBlbGVtc1tpXS5pZCA9PT0gXCJsb2dpblwiKSB7XHJcblx0XHRcdFx0XHRcdGZsYWcgPSBmYWxzZTtcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoZmxhZykgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5jbGFzc0xpc3QucmVtb3ZlKGZsaXBDbGFzcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblxyXG5cdFx0Ly9mbGlwIGVmZmVjdFxyXG5cdFx0ZnVuY3Rpb24gcnVuRmxpcCgpIHtcclxuXHRcdFx0bGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQuZmxpcElkKSxcclxuXHRcdFx0XHRjbGFzc2VzID0gZWxlbS5jbGFzc0xpc3Q7XHJcblxyXG5cdFx0XHRjbGFzc2VzLmNvbnRhaW5zKGZsaXBDbGFzcykgPT09IHRydWUgPyBjbGFzc2VzLnJlbW92ZShmbGlwQ2xhc3MpIDogY2xhc3Nlcy5hZGQoZmxpcENsYXNzKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSkoKTtcclxuIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBsYXllcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFyYWxsYXhfX2xheWVyXCIpLFxyXG5cdHBhcmFsbGF4O1xyXG5cclxuXHRsZXQgbW92ZUxhZXJzID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0ZSA9IGUgfHwgZXZlbnQ7XHJcblxyXG5cdFx0bGV0IGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBlLnBhZ2VYLFxyXG5cdFx0XHRpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgZGl2aWRlcjtcclxuXHJcblx0XHRcdGlmKGxheWVycy5sZW5ndGggPj0gNSkgZGl2aWRlciA9IGkgLyAxMDA7XHJcblx0XHRcdGVsc2UgZGl2aWRlciA9IChpICsgMSkgLyAxMDA7XHJcblxyXG5cdFx0XHRsZXQgWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuXHRcdFx0XHRZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxyXG5cdFx0XHRcdHRyYW5zZm9ybVN0eWxlID0gXCJ0cmFuc2xhdGUzZChcIiArIFggKyBcInB4LCBcIiArIFkgKyBcInB4LCBcIiArIFwiMClcIjtcclxuXHJcblx0XHRcdGxheWVyc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHlsZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlTGFlcnMpO1xyXG59OyJdfQ==
