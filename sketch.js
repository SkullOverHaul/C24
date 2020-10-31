const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1
var log1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(600,380,50,50);
    box2 = new Box(800,380,50,50);
    pig1 = new Pig(700,380)
    log1 = new Log(700,330,250,PI/2)

    box3 = new Box(600,310,50,50);
    box4 = new Box(800,310,50,50);
    pig2 = new Pig(700,310)
    log2 = new Log(700,260,250,PI/2)
    box5 = new Box(700,240,50,50);
    log3 = new Log(650,240,100,PI/4);
    log4 = new Log(750,240,100,PI/-4);
    bird1 = new Bird(150,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}