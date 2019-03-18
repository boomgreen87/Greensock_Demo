(() => {
	const box = document.querySelector('.box');

	// Basic structure of a TweenMax Tween:
	// TweenMax.to(el, time, {properties});

	function startAnimation() {
		TweenMax.to(box, 0.8, {x: 1000, rotation: 10800, scaleX: 1.5, scaleY: 1.5});
	}

	function resetAnimation() {
		TweenMax.to(box, 0.8, {x: 0, rotation: 0, scaleX: 1, scaleY: 1});
	}

	box.addEventListener("mouseover", startAnimation);
	box.addEventListener("mouseout", resetAnimation);
})();