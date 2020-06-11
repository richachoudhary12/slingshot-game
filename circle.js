class Circle{

constructor(x, y,width,height,  angle) {
var options = {
'restitution':0.2,
'friction':0.2,
'density':2.0
}

this.body = Bodies.rectangle(x, y, 5,5, options);
this.width = width;
this.height = height;
World.add(world, this.body);
}

display(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
rectMode(CENTER);
rect( 0, 0, this.width, this.height);
strokeWeight(4);
fill("red");
pop();
// this.body.position.x = mouseX;
//this.body.position.y = mouseY;

}
}
          