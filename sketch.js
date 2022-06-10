
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(850, 750);

var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(425,600,850,10)
wall1 = new Ground(575,565,10,70)
wall2 = new Ground(700,565,10,70)
ball = new Ball(200,565,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red");
 
  
ground.display()
wall1.display()
wall2.display()
ball.display()
}


function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body, ball.body.position, {x:0.01, y:-0.05})
}

}
