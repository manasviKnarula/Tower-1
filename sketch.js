const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var groundObject;
var polygon;

var block1,block2, block3,block4,block5,block6,block7, block8;
var block9, block10,block11,block12, block13, block14, block15,block16;


function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create,
  world = engine.world;
  groundObject = new Ground(180,200,310,10);

  //level one
  block1 = new Box(300,235,30,40);
  block2 = new Box(330,235,30,40);
  block3 = new Box(360,235,30,40);
  block4 = new Box(390,235,30,40);
  block5 = new Box(420,235,30,40);
  block6 = new Box(450,235,30,40);
  block7 = new Box(480,235,30,40);

  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(390,195,30,40);
  //top
  block16 = new Box(390,155,30,40);
  
  polygon = new poly(110,100,20,20);

  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)

  sling = new SlingShot(this.polygon.body,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  groundObject.display();
  polygon.display();
  sling.display();


  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
  slingshot.fly();
}