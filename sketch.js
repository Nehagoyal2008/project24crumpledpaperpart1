const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1,dustbin2,dustbin3;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=createSprite(520,640,10,100);
	dustbin2=createSprite(440,695,170,10);
	dustbin3=createSprite(350,650,10,100);
    paper=createSprite(450,100,10,10);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);


  Engine.update(engine);

  paper.collide(dustbin1);
  paper.collide(dustbin2);
  paper.collide(dustbin3);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === DOWN_ARROW){
		paper.velocityY=paper.y-10;
	}

}

