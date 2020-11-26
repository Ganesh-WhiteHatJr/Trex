var backGround, bow;
var backGroudImage, bowImage, arrow, arrowImage;
var rBallon, bBallon, pBallon, gBallon;
var rBallonImage, bBallonImage, pBallonImage, gBallonImage;


function preload(){
 backGroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  rBallonImage = loadImage("red_balloon0.png");
  bBallonImage = loadImage("blue_balloon0.png");
  pBallonImage = loadImage("pink_balloon0.png");
  gBallonImage = loadImage("green_balloon0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  backGround = createSprite(0,0,600,600);
  backGround.addImage(backGroundImage);
  backGround.scale = 2.5;
  
  bow = createSprite(450,150,20,20);
  bow.addImage(bowImage);
  
    for(var i=60; i<450; i=i+60){
    rBallon = createSprite(60,i,10,10);
    rBallon.addImage(rBallonImage);
    rBallon.scale = 0.1;
    }
  
      for(var i=120; i<390; i=i+60){
    bBallon = createSprite(120,i,10,10);
    bBallon.addImage(bBallonImage);
    bBallon.scale = 0.1;
      }
  
        for(var i=220; i<300; i=i+60){
    pBallon = createSprite(240,i,10,10);
    pBallon.addImage(pBallonImage);
    pBallon.scale = 1.3;
        }
  
          for(var i=160; i<390; i=i+60){
    gBallon = createSprite(180,i,10,10);
    gBallon.addImage(gBallonImage);
    gBallon.scale = 0.1;
      }
}

function draw() {
 backGround.velocityX = -5;
  if(backGround.x<0){
     backGround.x = backGround.width/2;
     }
  bow.x = mouseX;
  bow.y = mouseY;
  if(keyDown("space")){
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
    
  }
  drawSprites();
}
function createArrow(){
  arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow; 
}