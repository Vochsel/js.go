var Input = {
	x: 0,
	y: 0,
	setup: function() {
		document.addEventListener("mousemove", function(e) {
			console.log(e);
		});
	}
}