//适配js
(function(documents, windows) {
	var domElement = documents.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		setRem = function() {
			var clientWidth = domElement.clientWidth;
			console.log(clientWidth);
			if(!clientWidth) return;
			if(clientWidth >= 640) {
				domElement.style.fontSize = '100px';
			} else {
				domElement.style.fontSize = 100 * (clientWidth / 640) + 'px';
			}
		};
	if(!documents.addEventListener) return;
	setRem();
	windows.addEventListener(resizeEvt, setRem, false);
	documents.addEventListener('DOMContentLoaded', setRem, false);
})(document, window);