var canvas;

var player = new Player(0, 0);

function Load()
{
	canvas = js.draw.canvas("game");

	Input.setup(canvas);
	Keyboard.setup();

	player.setup();

	GameLoop();
}

function Update(t)
{
	player.update();
}

function Draw(t) 
{
	js.draw.clear();

	js.draw.refs.ctx.save();
	js.draw.refs.ctx.translate((-player.pos.x) + (canvas.width / 2), (-player.pos.y) + (canvas.height / 2));
	
	for(var x = 0; x < 10; x++)
	{
		for(var y = 0; y < 10; y++)
		{
			js.draw.rect(x * 100, y * 100, 50, 50, 0, "orange");
		}
	}


	player.draw();

	js.draw.refs.ctx.restore();

	js.draw.line(canvas.width / 2, canvas.height / 2, Input.x, Input.y);
	js.draw.circle(Input.x, Input.y, 15);
}

function GameLoop(t)
{
	Update(t);
	Draw(t);
	requestAnimationFrame(GameLoop);
}

