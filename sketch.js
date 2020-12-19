
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustBinImage
function preload()
{
dustBinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200,200,40,40);
	ground = new Ground(600,680,1200,40)
	rect1=Bodies.rectangle(850,650,20,100,{isStatic:true})
	World.add(world, rect1);
	rect2=Bodies.rectangle(1050,650,20,100,{isStatic:true})
	World.add(world, rect2);
	rect3=Bodies.rectangle(950,680,200,30,{isStatic:true})
	World.add(world, rect3);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
ground.display();
rect(rect1.position.x,rect1.position.y,20,100)
rect(rect2.position.x,rect2.position.y,20,100)
rect(rect3.position.x,rect3.position.y,200,30)
image(dustBinImage,850,580,200,100)
}
function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


