class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
    this.Body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.Body); 
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTRE)
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    
    }
    }
    
    
    