var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(300,100,80,30);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;
  gameobject1.velocityX=2;

 gameobject2 = createSprite(700,100,80,30);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;
  gameobject2.velocityX=-2;

  gameobject3 = createSprite(300,300,80,30);
  gameobject3.shapeColor = "green";
  gameobject3.debug = true;

  gameobject4 = createSprite(800,300,80,30);
  gameobject4.shapeColor = "green";
  gameobject4.debug = true;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
bounceOff(gameobject1,gameobject2);
  
  drawSprites();
}






