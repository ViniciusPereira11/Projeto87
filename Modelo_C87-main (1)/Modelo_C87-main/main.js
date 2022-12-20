var canvas = new fabric.Canvas("myCanvas");
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		blockImageObject = Img;
		
		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
		top:blockY,
		left:blockX
		});
		canvas.add(blockImageObject);
	});// para enviar imagens
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{ 
		blockX = 0;
	newImage('rr1.png');
console.log("r");	// enviar ranger escarlate
	}
	if(keyPressed == '71')
	{
		blockX = 250;
	newImage("gr.png");
	console.log("g");	// enviar ranger verde
	}
	
	if(keyPressed == '89')
	{
		blockX =400;
	newImage("yr.png");
console.log("y")	// enviar ranger amarelo
	}
	if(keyPressed == '80')
	{
		blockX = 650;
	newImage("pr.png");	
	console.log("p");// enviar ranger rosa
	}
	if(keyPressed == '66')
	{
		blockX = 700;
		newImage("br.png");
		console.log("a");
	// enviar ranger índigo
	}
	
}

