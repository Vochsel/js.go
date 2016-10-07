var Input = {
	x: 0,
	y: 0,
	setup: function() {
		canvas.addEventListener("mousemove", function(e) {
			Input.x = e.offsetX;
			Input.y = e.offsetY;
		});
	}
}