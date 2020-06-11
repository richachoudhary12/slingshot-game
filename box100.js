class Box {

constructor(x,y,width,height) {
var options = {
'restitution':0.9,
'friction':0.1,
'density':0.01
}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);

this.Visiblity = 255;
}

display(){
    
console.log(this.body.speed);
console.log(this.body.score);

if(this.body.speed < 1){

var pos =this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
fill("red");
rect(0, 0, this.width, this.height);
pop();
}

else{
World.remove(world, this.body);
push();
this.Visiblity = this.Visiblity -5;
tint(255,this.Visiblity);
// rect( this.body.position.x,this.body.position.y,this.width,this.height);
pop();
}
       
if (this.Visiblity < 0 && this.Visiblity > -100){
    score++;
    
    }

};

}   


    



