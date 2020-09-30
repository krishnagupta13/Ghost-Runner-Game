function preload(){
  towerimg = loadImage("tower.png");
  ghostimg1 = loadImage("ghost-standing.png");
  doorimg = loadImage("door.png")
  
  
}
function setup(){
  createCanvas(600,600);
   tower = createSprite(300,300,600,600);
   tower.addImage("tower",towerimg)
   tower.velocityY = 1;
   ghost = createSprite(300,450,20,20);
   ghost.addImage("ghost1",ghostimg1);
   ghost.scale = 0.3;
  
   
  
}
function draw(){
  background(180);
   if(tower.y>600){
     tower.y = 300;
   }
   if(keyDown("space")){
      ghost.y = ghost.y - 30
   }
   if(keyDown("right")){
      ghost.x = ghost.x + 10;
   }
   if(keyDown("left")){
      ghost.x = ghost.x - 10;
   }
   ghost.velocityY = ghost.velocityY+0.1        
  
  spawnDoors();
  
  drawSprites();
  
}

function spawnDoors(){
  if(frameCount % 100 === 0){
     doors=createSprite(300,300,30,30)
     doors.addImage("door",doorimg)
     doors.velocityY = 1;
     doors.x
     }
}







