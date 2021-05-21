var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var abc;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	var abc={
		restitution:3
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , {abc, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 var box1 = createSprite(width/2,655,100,10,{isStatic:true});
	 World.add(world,box1);
	 box1.shapeColor=color(255,0,0);

	 var box2 = createSprite(height/2,634.5,10,50,{isStatic:true});
	 World.add(world,box2);
	 box2.shapeColor=color(255,0,0);

	 var box3 = createSprite(height/1.55,634,10,50,{isStatic:true});
	 World.add(world,box3);
	 box3.shapeColor=color(255,0,0);

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody, false);
	packageSpriteY=2;
	
}
}
 

