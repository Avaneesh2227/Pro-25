
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	paper1=new Paper(40,40,10);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 

  groundObject.display();
  dustbinObj.display();
  paper1.display()

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:25, y:-25})
	}
}