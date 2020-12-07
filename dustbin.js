class Dustbin{
    constructor(x,y,width,height){
      var options = {
          'isStatic':true,
          'density': 5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/dustbin.png");
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        //rectMode(CENTER);
        //fill("white");
        //rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,650,580,140,150);
    }
}