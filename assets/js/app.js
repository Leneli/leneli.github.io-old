"use strict";

(function() {
	svg4everybody(); //for SVG-elements in IE
})();
window.onload = function() {

	let authorize = document.getElementById("authorize"),
		flipClass = "flipper";

	//login form
	authorize.addEventListener("click", runFlip);
	console.log(authorize);

	//flip effect
	function runFlip() {
		let elem = document.getElementById(this.dataset.flipId),
			classes = elem.classList;

		classes.contains(flipClass) === true ? classes.remove(flipClass) : classes.add(flipClass);
	}

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

};
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZsaXAuanMiLCJwYXJhbGxheC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblx0c3ZnNGV2ZXJ5Ym9keSgpOyAvL2ZvciBTVkctZWxlbWVudHMgaW4gSUVcclxufSkoKTsiLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdGxldCBhdXRob3JpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6ZVwiKSxcclxuXHRcdGZsaXBDbGFzcyA9IFwiZmxpcHBlclwiO1xyXG5cclxuXHQvL2xvZ2luIGZvcm1cclxuXHRhdXRob3JpemUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJ1bkZsaXApO1xyXG5cdGNvbnNvbGUubG9nKGF1dGhvcml6ZSk7XHJcblxyXG5cdC8vZmxpcCBlZmZlY3RcclxuXHRmdW5jdGlvbiBydW5GbGlwKCkge1xyXG5cdFx0bGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQuZmxpcElkKSxcclxuXHRcdFx0Y2xhc3NlcyA9IGVsZW0uY2xhc3NMaXN0O1xyXG5cclxuXHRcdGNsYXNzZXMuY29udGFpbnMoZmxpcENsYXNzKSA9PT0gdHJ1ZSA/IGNsYXNzZXMucmVtb3ZlKGZsaXBDbGFzcykgOiBjbGFzc2VzLmFkZChmbGlwQ2xhc3MpO1xyXG5cdH1cclxuXHJcblx0Ly/Qv9C10YDQtdCy0LXRgNC90YPRgtGMINC60LDRgNGC0YMg0L/RgNC4INC60LvQuNC60LUg0LLQvdC1INC10LVcclxuXHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZighZSkgZSA9IHdpbmRvdy5ldmVudDtcclxuICAgIFx0bGV0IGVsZW1zID0gZS5wYXRoLFxyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYoZWxlbXNbaV0uaWQgPT09IFwiYXV0aG9yaXplXCIgfHwgZWxlbXNbaV0uaWQgPT09IFwibG9naW5cIikge1xyXG5cdFx0XHRcdGZsYWcgPSBmYWxzZTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoZmxhZykgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5jbGFzc0xpc3QucmVtb3ZlKGZsaXBDbGFzcyk7XHJcblx0fSk7XHJcblxyXG59OyIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgbGF5ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhcmFsbGF4X19sYXllclwiKSxcclxuXHRwYXJhbGxheDtcclxuXHJcblx0bGV0IG1vdmVMYWVycyA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUgPSBlIHx8IGV2ZW50O1xyXG5cclxuXHRcdGxldCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gZS5wYWdlWCxcclxuXHRcdFx0aW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBlLnBhZ2VZO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGRpdmlkZXI7XHJcblxyXG5cdFx0XHRpZihsYXllcnMubGVuZ3RoID49IDUpIGRpdmlkZXIgPSBpIC8gMTAwO1xyXG5cdFx0XHRlbHNlIGRpdmlkZXIgPSAoaSArIDEpIC8gMTAwO1xyXG5cclxuXHRcdFx0bGV0IFggPSBpbml0aWFsWCAqIGRpdmlkZXIsXHJcblx0XHRcdFx0WSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuXHRcdFx0XHR0cmFuc2Zvcm1TdHlsZSA9IFwidHJhbnNsYXRlM2QoXCIgKyBYICsgXCJweCwgXCIgKyBZICsgXCJweCwgXCIgKyBcIjApXCI7XHJcblxyXG5cdFx0XHRsYXllcnNbaV0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3R5bGU7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUxhZXJzKTtcclxufTsiXX0=
