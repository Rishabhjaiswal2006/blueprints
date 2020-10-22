const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var MYengine,MYworld, box1,box2,ground;


function setup(){

  createCanvas(400,400);

  MYengine=Engine.create();
  MYworld=MYengine.world;

  box1 = new Box(200,200,50,50);
  box2 = new Box(200,300,50,50);
  ground = new Ground(200,390,400,10);
  
}

function draw(){

  background("pink");
  Engine.update(MYengine);

  box1.display();
  box2.display();
  ground.display();

}