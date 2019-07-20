window.onload = function () {
	var bodyRight = document.getElementById('#body-right');

	bodyRight.onmouseover = function () {
		bodyRight.className = 'body-right';
	}

	bodyRight.onmouseout = function () {
		bodyRight.className = '';
	}
}