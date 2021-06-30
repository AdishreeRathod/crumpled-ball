
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball;
 var ground;
 var right;
 var left;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
     isStatic:false,
	 restituition:0.3,
	 friciton:0,
	 density:1.2
	}
    ball=Bodies.circle(600,50,30,ball_options);
	World.add(world,ball);

	var groundopt={
		isStatic:true
	  }
	  ground= new Ground(800,350,400,20,groundopt);
	  right= new Ground(width/2,670,width,20);
	  left= new Ground(1100,600,20,120);
	  	  World.add(world,ground);
	  
	
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
 
} 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})	}
}



