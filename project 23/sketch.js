var PLAY=1
var END=0
var gameState=PLAY

var helicopter,helicopterImage,package,packageImage;
var rightRectangle,leftRectangle,baseRectangle;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;



function preload(){
	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")


  


	
}

function setup() {
	createCanvas(400, 400);
	

	engine=Engine.create();
    world=engine.world;

    package=createSprite(200,100);
	package.addImage(packageImage);
    package.scale=0.09;
	
    helicopter=createSprite(200,100);
	helicopter.addImage(helicopterImage);
	helicopter.scale=0.25;
	

	rightRectangle=createSprite(140,374,10,60);
	rightRectangle.shapeColor="red";

	baseRectangle=createSprite(180,395,85,10);
	baseRectangle.shapeColor="red";

	leftRectangle=createSprite(220,374,10,60);
	leftRectangle.shapeColor="red";


}


function draw() {
	background(0,0,0)
	Engine.update(engine);

	if(gameState===PLAY){
		
		if(keyDown("Right_Arrow")){
			helicopter.x=helicopter.x+4;
		}
	
		if(keyDown("Left_Arrow")){
			helicopter.x=helicopter.x-4
		}
	
		package.position.x=helicopter.position.x;
	
		
		if(keyDown("Down_Arrow")){
			gameState=END;
			package.velocityY=4;
		}

    }else if(gameState===END){
		
	    if(package.isTouching(baseRectangle)){
		   package.velocityY=0;
	    }
		
	    if(package.isTouching(leftRectangle)){
		   package.velocityY=0;
	    }

		if(package.isTouching(rightRectangle)){
			
		   package.velocityY=0;
			   
		 }
      
	



    }





	
	
			
		
createEdgeSprites();
  
  drawSprites();
  
  
}
