const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

  var score = 0;
function setup (){
 
var canvas = createCanvas(600,600);
engine = Engine.create();
world = engine.world;

log1 =  new Log(300,590,600,20);  
log2 = new Log(440,250,300,20);

box1 = new Box(400,545,70,70);
box2 = new Box(470,545,70,70);
box3 = new Box(330,545,70,70);
box4 = new Box(540,545,70,70); 
box5 = new Box(470,475,70,70);
box6 = new Box(400,475,70,70);
box7 = new Box(440,405,70,70);
box8 = new Box(355,215,50,50);
box9 = new Box(405,215,50,50);
box10 = new Box(455,215,50,50);
box11 = new Box(505,215,50,50);
box12 = new Box(410,165,50,50);
box13 = new Box(460,165,50,50);
box14 = new Box(430,115,50,50);

circle = new Circle(100,50);

slingshot = new Slingshot(circle.body,{x:100,y:398}); 

}

function draw (){

background("pink");
Engine.update(engine);

noStroke();
textSize(35)
fill("white")
text("Score : "+score, width-300, 50);

noStroke();
textSize(14)
fill("purple")
text("PRESS SPACE BAR TO BRING BACK THE BALL ", 50, 100);

log1.display();
log2.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();

circle.display();

slingshot.display();
}

function mouseDragged (){
Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
if(keyCode === 32){
slingshot.attach(circle.body);
log.fill("green");
}



   
    }





