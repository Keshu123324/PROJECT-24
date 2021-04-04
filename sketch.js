
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,Paper,stickbase,stick2,stick3;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (800,670,1600,20);
  Paper = new paper(200,240,50,50);
  stickbase=new dustbin(1200,650);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  Paper.display();
  stickbase.display()

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

  Matter.Body.applyForce(Paper.body, Paper.body.position, {x:170,y:-105});
}
}



