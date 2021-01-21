var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 70, 70);
  movingRect.shapeColor = "yellow";
  fixedRect = createSprite(300, 200, 70, 70);
  fixedRect.shapeColor = "yellow";

}

function draw() {
  background("blue");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 +fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 +fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 +fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2 )
    
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }

  drawSprites();
}
