const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2,ground,box3


function setup() {
 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
box1=new Box(200,300,50,50);
 ground=new Ground(200,height,400,20);
  box2=new Box(240,100,50,100);
  box3=new Box(220,150,50,50);
}

function draw() {
  background("lime");
  Engine.update(engine); 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
}