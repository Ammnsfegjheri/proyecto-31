var pacman,lowerWall,upperWall,leftWall;
var walls=[{x550, y450, w1200, h10},
{x550, y20, w1200, h10},
{x15, y235, w10, h450},
{x70, y50, w80, h20},
{x70, y100, w80, h20},
{x70, y150, w80, h20}
]






function setup(){
  createCanvas(950, 470);
  pacman=createSprite(550,height/2,50,60);
  //lowerWall=createSprite(550,450,1200,40);
 // upperWall=createSprite(550,20,1200,40);
  //leftWall=createSprite(15,235,40,390);

for(var i in walls){
var wall=createSprite(walls[i].x, walls[i].y, walls[i].w, walls[i].h);

}

}


function draw(){
  background(220);
  
  if(keyDown("right")){
  pacman.x+=5;
 }
 if(keyDown("left")){
  pacman.x-=5;
 }
 if(keyDown("up")){
  pacman.y-=5;
 }
 if(keyDown("down")){
  pacman.y+=5;
 }
   
    
  drawSprites();
  
}



