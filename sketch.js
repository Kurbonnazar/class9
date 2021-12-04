var box
function setup() {
  createCanvas(400,400);
  box=createSprite(150,200,20,20)
  box.shapeColor="red"
}

function draw() 
{
  background(30);
drawSprites()
if(keyDown("left")){
  box.x=box.x-2
}
if(keyDown("right")){
  box.x=box.x+2
}
if(keyDown("up")){
  box.y=box.y-2
}
if(keyDown("down")){
  box.y=box.y+2
}
}




