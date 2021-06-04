
var monkey , monkey_running,monkeycollid
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){

  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup=new Group()
  obstaclesGroup=new Group()
 
}



function setup() {
  createCanvas(670, 400);
  
  score=0
  
 monkey=createSprite(100,380,100,10)
monkey.addAnimation("image",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(111,400 ,5000,10);

}


function draw() {
  background("green")
  if(keyDown("space")&&monkey.y >= 300 ){
    monkey.velocityY=-10   
  } 
   monkey.velocityY = monkey.velocityY + 0.30
 monkey.collide(ground)
 

  
  ground.velocityX = -10
 ground.x = ground.width/2;
  
  
   if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
    
drawSprites();
food();
stone();
  
   fill("yellow")
  text("SCORE="+score,30,30)
 
}

function food(){
 if (frameCount % 80 === 0){
  banana=createSprite(500,200 ,30,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  var rand =Math.round(random(120,200))
  food.lifetime=200
   banana.velocityX=-6
  FoodGroup.add(banana)
 }
}
 
function stone(){
  if (frameCount % 300 === 0){
  obstacle=createSprite(600,360,10,10)
  obstacle.addImage("image",obstacleImage);
  obstacle.scale=0.2
  
    
   var rand =Math.round(random(1,10))
   obstacle.lifetime=200
    obstacle.velocityX=- 5
  obstaclesGroup.add(obstacle)
   
   } 
  
}
