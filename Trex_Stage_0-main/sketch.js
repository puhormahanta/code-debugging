var edges
var falseground
var trex ,trex_running;
var ground,groundimage;
function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage= loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  edges= createEdgeSprites()
  //create a trex sprite
 trex= createSprite(50,85,20,20)
 trex.addAnimation("running",trex_running)
 trex.scale= 0.5

 ground= createSprite(200,185,400,10)
 ground.velocityX= -4
 ground.addImage("ground",groundimage)
 falseground= createSprite(200,195,400,10)
 falseground.visible= false 
}

function draw(){
  background(0)
  if(keyDown("space")&& trex.y>=150) {
    trex.velocityY= -10
  }
  trex.velocityY= trex.velocityY +0.8
  if(ground.x<30){
    ground.x=ground.width/2
  }
trex.collide(falseground);
drawSprites()
}
