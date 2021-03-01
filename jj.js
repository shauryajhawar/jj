var canvas;
var music;
var fixedSprite1 , fixedSprite2 , fixedSprite3 , fixedSprite4 ;
var movingSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 canvas = createCanvas(800,600);



  movingSprite=createSprite(random(10,750),300,20,20)
  movingSprite.shapeColor = " white"
  movingSprite.velocityX = 3;
  movingSprite.velocityY = 3;   

fixedSprite1=createSprite(100,590,180,20)
fixedSprite1.shapeColor = "red";

fixedSprite2=createSprite(300,590,180,20)
fixedSprite2.shapeColor = "green";
 
fixedSprite3=createSprite(500,590,180,20)
fixedSprite3.shapeColor = "blue";

fixedSprite4=createSprite(700,590,180,20)
fixedSprite4.shapeColor = "yellow";



}

function draw() {
    drawSprites()
    
    background(rgb(163,163,163));
    if(movingSprite. X< 0){
         music .stop()
         movingsprite.velocityX=3
     } else if(movingSprite.x>800){
         music .stop()
         movingSprite.velocityX=-3

     }


if (isTouching(movingSprite,fixedSprite4)){
 music.play()
 movingSprite.shapeColor = "yellow" 
 bounceOff(movingSprite,fixedSprite4)  
}



 if (isTouching(movingSprite,fixedSprite3)){
    music.stop()
    movingSprite.shapeColor = "blue" 
    bounceOff(movingSprite,fixedSprite3)    
 }
 
 
 if (isTouching(movingSprite,fixedSprite2)){
    music.play()
    movingSprite.shapeColor = "green" 
    bounceOff(movingSprite,fixedSprite2)  
         
 }


 if (isTouching(movingSprite,fixedSprite1)){
    music.play()
    movingSprite.shapeColor = "red" 
    bounceOff(movingSprite,fixedSprite1)  
 }   


if(movingSprite.y<0){
    music.stop()
    movingSprite.velocityY = 3
}




}