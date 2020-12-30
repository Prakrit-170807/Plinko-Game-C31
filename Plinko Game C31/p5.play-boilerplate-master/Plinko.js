class Plinko {
    constructor(x, y) {
      var options = {
        'isStatic': true, 
        'restitution':0.1,
        'friction':2,
        'density':0
      }
      this.body = Bodies.circle(x, y, 8, options);
      this.width = 8;
      this.height = 8;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      fill('#A3A3A3');
      ellipse(0, 0, this.width,this.height);
      pop();
    }
  };