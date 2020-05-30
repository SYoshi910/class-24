const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,520,70,70);
    box2 = new Box(900,520,70,70);
    ground1 = new Ground();
    pig1 = new Pig(1000,520);
    pig2 = new Pig(1000,400);
    log1 = new Log(1001,450,270,PI/2);
    log2 = new Log(1001,380,270,PI/2);
    log3 = new Log(900,280,130,PI/7);
    log4 = new Log(1080,280,130,-PI/7);
    box3 = new Box(1100,400,70,70);
    box4 = new Box(900,400,70,70);
    box5 = new Box(1000,280,70,70);
    bird = new Bird(50,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}