
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(displayWidth-20,displayHeight-20);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	
  player = new Player(10,20,20,50);
  ground = new Ground(100,height-50,200,10);


	Engine.run(engine);
  
}


function draw() {
  background("black");
  rectMode(CENTER);
  Engine.update(engine) 

  player.display();
  ground.display();

 
 
}