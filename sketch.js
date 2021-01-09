var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, 680, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
    var options={
		isStatic:true,
		restitution :1
		
		
	}

	 packageBody = Bodies.rectangle(packageSprite.x,packageSprite.y,40,40,options);
	 World.add(world, packageBody);
	 
	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10,{isStatic:true} );
 	World.add(world, ground);


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode ===32){
Matter.Body.setStatic(packageBody,false)

}
}



