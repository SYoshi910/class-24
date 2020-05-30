class Ground {
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(width/2,height-25,width,50,options);
        this.width = width;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rect(width/2,height-25,this.width,this.height);
    }
}