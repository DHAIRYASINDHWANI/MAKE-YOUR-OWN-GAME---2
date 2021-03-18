

//BUGS
//function birds: birds not stopping after end state
//player is jumping even after end state
//slide thing not working 

//TO BE DONE
//two jumps thing 

//End state in draw();
//Play state in draw();
//score using coins
//highest coins collected(highest score)
//moving of background to be done 
//gameover button


var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player,fallImg, runImg,bgImg,bg,jumpImg,slideImg;
var ground;
var obstacleGroup, obstacle1, obstacle1Img;
var score = 0;

//
var GameOver, restart;
var birdGrp, bird1, bird1Img;
function preload(){

runImg = loadAnimation("run/0.png","run/1.png","run/2.png","run/3.png","run/4.png");
fallImg = loadImage("fall/0.png");
slideImg = loadAnimation("slide/0.png","slide/1.png","slide/2.png","slide/3.png","slide/4.png")

bgImg = loadImage("anime bg.png");

obstacle1Img=loadImage("barricade.png");
bird1Img=loadAnimation("Bird/0.png","Bird/1.png","Bird/2.png","Bird/3.png","Bird/4.png","Bird/7.png","Bird/8.png","Bird/9.png","Bird/10.png","Bird/11.png","Bird/16.png","Bird/17.png","Bird/18.png","Bird/19.png","Bird/20.png","Bird/29.png","Bird/30.png","Bird/31.png","Bird/32.png","Bird/33.png","Bird/38.png","Bird/39.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-250);

  ground=createSprite(288,597,1000,20);
  ground.velocityX = -(6 + 3*score/100);
  ground.x=ground.width/2;
  ground.visible = false; 

  player = createSprite(135,565);
  player.scale=1;
  player.addAnimation("run", runImg);
  player.addImage("fall", fallImg);
  player.addAnimation("slide", slideImg);

  obstacleGroup = new Group();
  birdGrp=new Group();

  score = 0;

}

function draw() {
  //player.debug = true;
  
  background("white");
  background(bgImg);

  //to be removed after positioning 
  text(mouseX + ',' + mouseY, 10, 15);
 

  drawSprites();
 

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  ground.velocityX = -4;
 // ground.visible = false;

 if(keyDown("up")) {
  player.velocityY = -15;
}
player.velocityY = player.velocityY + 0.8;
console.log(player.velocityY);

//
if(keyDown("down")){
  player.addAnimation("slide",slideImg);
}
//



 player.collide(ground);

  enemy();
  birds();
}
function enemy(){
  
 if (frameCount%150===0){
  obstacle1 = createSprite(1580,570);
  obstacle1.scale = 0.4;
  obstacle1.velocityX = -5;
  obstacle1.addImage("obstacleImg", obstacle1Img);
  //obstacle1.lifetime = 400;
 // obstacle1.debug = true;
  obstacleGroup.add(obstacle1);
  obstacle1.collide(ground);
 
  if(obstacleGroup.isTouching(player)){
    player.changeAnimation("fall", fallImg);
    player.setVelocityY=0;
    ground.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    
 }
 } 
 
}
function birds(){
  if (frameCount%100===0){
    bird1=createSprite(1600,460);
    //bird1.scale=
    bird1.velocityX=-5;
    bird1.addAnimation("bird",bird1Img);
    //bird1.lifetime=;
    birdGrp.add(bird1);

    if(birdGrp.isTouching(player)){
      player.changeAnimation("fall", fallImg);
      player.setVelocityY=0;
      ground.velocityX = 0;
      obstacleGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
      birdGrp.setVelocityXEach(0);
      birdGrp.setLifetimeEach(-1);

    }
  }
}