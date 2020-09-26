class Ball {
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius, {isStatic : false, restitution:0.1,
        friction:0.5,density:1.2});
        this.radius = radius;

        World.add(world, this.body);

       this.paperImg = loadImage("Images/paper.png");
    }

    display(){
        var pos = this.body.position;
        push();
        fill(138,30,46); 
        imageMode(CENTER);
        image(this.paperImg,pos.x,pos.y,this.radius,this.radius);
        pop();  
    }
}