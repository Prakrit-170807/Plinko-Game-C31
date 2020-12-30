const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

///////////////////////////////////////////////////

var ground,side1,side2,side3,side3_
var deviders
var plinko=[],plinko2=[],plinko3=[],plinko4=[],plinko5=[]
var spacer=[]
var ball=[]

function setup() {
  var canvas = createCanvas(600,windowHeight);
  engine = Engine.create();
  world = engine.world;

////////////////////////////////////////////////////

  ground = new Ground(300,height-10,2000,20)
  side1 = new Ground(10,height,20,2000)
  side2 = new Ground(590,height,20,2000)
  side3 = new Ground(40,10,40,20)
  side3_ = new Ground(560,10,40,20)

////////////////////////////////////////////////////

  for(var i =0; i<=width; i =i+120){
    spacer.push(new Deviders(i+10,height-120,15,200))
  }
  
////////////////////////////////////////////////////

  for(var p=0; p<=width; p=p+95){
    plinko.push(new Plinko(p+60,80))
  }

  for(var p2=0; p2<=width; p2=p2+102){
    plinko2.push(new Plinko(p2+90,170))
  }

  for(var p3=0; p3<=width; p3=p3+95){
    plinko3.push(new Plinko(p3+60,260))
  }

  for(var p4=0; p4<=width; p4=p4+102){
    plinko4.push(new Plinko(p4+90,350))
  }

  for(var p5=0; p5<=width; p5=p5+95){
    plinko5.push(new Plinko(p5+60,440))
  }

///////////////////////////////////////////////////


}
function draw() {
  background('#242424');
  Engine.update(engine)

  for(var i =0; i<spacer.length-1; i++){
    spacer[i].display()
  }

//////////////////////////////////////////

  for(var p=0; p<plinko.length;p++){
    plinko[p].display()
  }

  for(var p2=0; p2<plinko2.length;p2++){
    plinko2[p2].display()
  }

  for(var p3=0; p3<plinko3.length-1;p3++){
    plinko3[p3].display()
  }

  for(var p4=0; p4<plinko4.length-1;p4++){
    plinko4[p4].display()
  }

  for(var p5=0; p5<plinko3.length-1;p5++){
    plinko5[p5].display()
  }

////////////////////////////////////////////

  side3.display()
  side3_.display()
  side1.display()
  side2.display()
  ground.display()

///////////////////////////////////////////


  

  if(frameCount%15==0){
    ball.push(new Balls(random(100,500),-10))
    
  }
  for(var i=0; i<=ball.length-1; i++){
      ball[i].display()
    }
  
  

  

///////////////////////////////////////////

  drawSprites();
}