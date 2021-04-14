class polygon{

constructor(x,y,r){

var Options={

isStatic:false

}

this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("polygon.png")

this.body=Bodies.circle(this.x,this.y,this.r/2,Options)
World.add(world,this.body);



}
display(){

var pos=this.body.position;
push();

translate(pos.x,pos.y)

imageMode(CENTER)
ellipseMode(RADIUS);
image(this.image,0,0,this.r*2,this.r*2)

pop();


}



}