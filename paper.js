class Paper {  
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("images/paper.png");
        World.add(world, this.body);
   }
   
   display(){
    //fill("purple");
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    imageMode(CENTER);
    image(this.image,100,652,50,50);

   }
}
