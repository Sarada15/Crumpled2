class Trash {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Trash.png");

        World.add(world,this.body);
    }

        display() {
            var pos = this.body.position;
            rectMode(CENTER);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);

            fill("green");
            rect(pos.x,pos.y,this.width,this.height);
        }
}