var canvas;

function Load()
{
	js.draw.canvas("game");
	canvas = js.draw.refs.canvas;

	Input.setup(canvas);

	GameLoop();
}

function Update()
{

}

function Draw() 
{
	js.draw.clear();

	js.draw.rect(canvas.width / 2, canvas.height / 2, 100, 100, 0, "lightblue");
}

function GameLoop()
{
	Update();
	Draw();
	requestAnimationFrame(GameLoop);
}

