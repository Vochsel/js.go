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

var Keyboard = {
	keys: [],
	isKeyDown: function(key) {
		return Keyboard.keys[key];
	},
	setup: function() {
		document.addEventListener("keydown", function(e) {
			if(e.repeat)
				return;

			var kc = e.keyCode;
			Keyboard.keys[kc] = true;

			console.log(kc);
		});

		document.addEventListener("keyup", function(e) {
			if(e.repeat)
				return;

			var kc = e.keyCode;
			Keyboard.keys[kc] = false;
		});
	}
}