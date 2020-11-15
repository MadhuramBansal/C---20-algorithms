function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30)
  fixedRect.shapeColor = "yellow"
  movingRect.shapeColor = "yellow"
}

function draw() {
  background("green");
  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width / 2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height / 2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ) {
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else {
    fixedRect.shapeColor = "yellow"
    movingRect.shapeColor = "yellow"
  }
  drawSprites();
}