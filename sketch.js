var bg, bgImg;
var theif,thiefImg
var ground,groundImg,invGround;
var pcars,pcarsImg;
var dollar,dollarImg;
var dollars;

var gameState = "play";

var carsGroup, dollarGroup;

function preload(){


 thiefImg=loadAnimation("img/a1.png","img/a2.png","img/a3.png","img/a4.png");
groundImg=loadImage("img/ground.png");
pcarsImg=loadImage("img/pc1.png")
dollarBag=loadImage("img/dbag1.png")
}

function setup() {
  createCanvas(800,600);

ground=createSprite(400,575,1600,20);
ground.addImage(groundImg);
ground.scale=3.3;

invGround=createSprite(400,607,1000,30);
invGround.visible=false;

 thief = createSprite(100, 468, 50, 50);
 thief.addAnimation("running",thiefImg);
 thief.scale=2;

// thief.debug=true;
 // pcars.debug=true;
// pcars.setCollider("rectangle",0,0,100,100)

 dollarGroup= new Group(); 
 dollars=0;
 carsGroup= new Group();
}

function draw() {
  background("skyblue");  

if(gameState==="play"){
  ground.velocityX=-10;

if(dollarGroup.isTouching(thief)){
    dollars=dollars+1;
    dollarGroup.destroyEach()
}
fill("gold");
stroke("black")
textSize(35)
text("Bags looted = "+ dollars,470,30);

if(keyDown("j")&& thief.x<465){
  thief.velocityY=-15;
}
thief.velocityY=thief.velocityY+0.8;

  if(ground.x<0){
    ground.x=ground.width/2
  }
  cars()
  spawnDollar()

if(carsGroup.isTouching(thief)){
  gameState="end";
}
  
  drawSprites();
}
else if (gameState==="end"){{
 
  fill("red");
  textSize(85);
  text("GAME OVER !",140,300);

  textSize(25);
  stroke("black")
text("-> We are arrested !!",40,400)}}


  thief.collide(invGround)

} 

function cars(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  if(frameCount%117===0){
      pcars=createSprite(870,500,20,20);
      pcars.addImage(pcarsImg);
      pcars.velocityX=-13
      pcars.scale=1.1;
      pcars.lifetime=200;
    

carsGroup.add(pcars)
  }
}

function spawnDollar(){
  if (frameCount%700===0){
      dollar=createSprite(840,520,20,20);
      dollar.addImage(dollarBag);
      dollar.velocityX=-10;
      dollar.scale=0.5;
      dollar.lifetime=200;

dollarGroup.add(dollar)
  }
}

