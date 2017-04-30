(function() {
	"use strict";

	svg4everybody(); //for SVG-elements in IE
})();
(function() {
	"use strict";

	var authorize = document.getElementById("authorize"),
		flipClass = "flipper";

	//login form
	authorize.addEventListener("click", runFlip);


	//flip effect
	function runFlip() {
		let elem = document.getElementById(this.dataset.flipId),
			classes = elem.classList;

		classes.contains(flipClass) === true ? classes.remove(flipClass) : classes.add(flipClass);
	}

	//перевернуть карту при клике вне ее
	document.body.addEventListener("click", function(e) {
		if(!e) e = window.event;
    	var elems = e.path,
			flag = true;

		for(let i = 0; i < elems.length; i++) {
			if(elems[i].id === "authorize" || elems[i].id === "login") {
				flag = false;	
			}
		}

		if(flag) document.getElementById("login").classList.remove(flipClass);
	});

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZsaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0c3ZnNGV2ZXJ5Ym9keSgpOyAvL2ZvciBTVkctZWxlbWVudHMgaW4gSUVcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHZhciBhdXRob3JpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6ZVwiKSxcclxuXHRcdGZsaXBDbGFzcyA9IFwiZmxpcHBlclwiO1xyXG5cclxuXHQvL2xvZ2luIGZvcm1cclxuXHRhdXRob3JpemUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJ1bkZsaXApO1xyXG5cclxuXHJcblx0Ly9mbGlwIGVmZmVjdFxyXG5cdGZ1bmN0aW9uIHJ1bkZsaXAoKSB7XHJcblx0XHRsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YXNldC5mbGlwSWQpLFxyXG5cdFx0XHRjbGFzc2VzID0gZWxlbS5jbGFzc0xpc3Q7XHJcblxyXG5cdFx0Y2xhc3Nlcy5jb250YWlucyhmbGlwQ2xhc3MpID09PSB0cnVlID8gY2xhc3Nlcy5yZW1vdmUoZmxpcENsYXNzKSA6IGNsYXNzZXMuYWRkKGZsaXBDbGFzcyk7XHJcblx0fVxyXG5cclxuXHQvL9C/0LXRgNC10LLQtdGA0L3Rg9GC0Ywg0LrQsNGA0YLRgyDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0LXQtVxyXG5cdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmKCFlKSBlID0gd2luZG93LmV2ZW50O1xyXG4gICAgXHR2YXIgZWxlbXMgPSBlLnBhdGgsXHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZihlbGVtc1tpXS5pZCA9PT0gXCJhdXRob3JpemVcIiB8fCBlbGVtc1tpXS5pZCA9PT0gXCJsb2dpblwiKSB7XHJcblx0XHRcdFx0ZmxhZyA9IGZhbHNlO1x0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihmbGFnKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLmNsYXNzTGlzdC5yZW1vdmUoZmxpcENsYXNzKTtcclxuXHR9KTtcclxuXHJcbn0pKCk7Il19
