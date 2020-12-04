const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,500,10);

	//dustbin1 = new Dustbin(590,620,10,70);
	//dustbin2 = new Dustbin(715,620,10,70);
	dustbin3 = new Dustbin(650,600,140,150);

	ground = new Ground(400,685,1000,30);
 
	 
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  fill("black");
  textSize(20);
  text("Press up arrow key to throw the trash into the dustbin",150,200);
  
 
  drawSprites();

  ground.display();

  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display(); 

  paper.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}



