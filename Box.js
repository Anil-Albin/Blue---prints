class Box{
constructor(x,y,width,height){
    var options = {
        restitution: 1
    }
this.Body = Bodies.rectangle(x,y,width,height,options);

this.width = width;
this.height=height;

World.add(world,this.Body); 

}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    Translate(pos.x,pos.y);
    rotate(angle);


    rectMode(CENTRE)
    fill(255);
    rect(0,0,this.width,this.height);
    pop();

}


}


