
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,650,800,20);

	paperBall = new Paper(100,600,20);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paperBall.display();



  drawSprites();
 
}



