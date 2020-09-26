// writing the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// loading the images
function preload(){
	dustBinImg = loadImage("Images/dustbinGreen.png");
}

function setup() {

	// creating he canvas
	createCanvas(1500, 600);

	// creatng the world and engine.
	engine = Engine.create();
	world = engine.world;

	// creating the Bodies and the sprites.

	dustbin = createSprite(1200,450,20,20);
	dustbin.addImage(dustBinImg);
	dustbin.scale = 0.6;

	// creating the paper
	ball1 = new Ball(100,520,100);
	
    // creating the ground
	ground = new Ground(width/2,550,width,20);

	// creating the bars.
	bar1 = new Bar(1200-70,450,10,100);
	bar2 = new Bar(1200,500,130,10);
	bar3 = new Bar(1200+70,450,10,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("yellow");
  ground.display();
  ball1.display();
  bar1.display();
  bar2.display();
  bar3.display();
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Body.applyForce(ball1.body, ball1.body.position, {x:300,y:-1500});
	}
}