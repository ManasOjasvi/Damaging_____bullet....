var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = color(255,255,255)
 

  speed = random(223,231);
  weight = random(30,52);
  thickness = random(22,83);

    wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  drawSprites();

if(hasCollided(bullet, wall)) {
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10) {
  wall.shapeColor = color(255,0,0)
}
if(damage<10) {
  wall.shapeColor = color(0,255,0)
}
}
  if(wall.x - bullet.x < (bullet.width + wall.width)/2) {
  bullet.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;

  if(deformation>180) {
    bullet.shapeColor = color(255,0,0)
  }
  if(deformation<180 && deformation>180) {
    bullet.shapeColor = color("yellow")
  }
  if(deformation<100) {
    bullet.shapeColor = color(8,255,0)
  }
  }

}
function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;

  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  else
  {
    return false;
  }
}