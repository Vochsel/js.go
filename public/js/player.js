var Player = function(x, y) {
	this.pos = vec2(x, y);
	this.rot = 0;
	this.speed = 4;

	this.setup = function()
	{
		//this.pos.x = canvas.width / 2;
		//this.pos.y = canvas.height / 2;
	}

	this.update = function()
	{
		var a = Math.atan2(Input.y - canvas.height / 2, Input.x - canvas.width / 2);
		this.rot = a;

		if(Keyboard.isKeyDown(87)) {
			this.pos.x += Math.cos(this.rot) * this.speed;
			this.pos.y += Math.sin(this.rot) * this.speed;
		}
	}

	this.draw = function()
	{
		
		js.draw.rect(this.pos.x, this.pos.y, 100, 100, this.rot, "lightblue");
		
	}
}