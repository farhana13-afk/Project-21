var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed= random(50,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall= createSprite(1200,200, thickness, height/2);
  wall.shapeColor="grey";

}

function draw() {
  background("black");  
  
  if(collide(bullet, wall)){
    bullet.velocityX=0;
     damage();
  }
  drawSprites();
}

function collide(object1, object2){

 if( object1.x - object2.x < object1.width/2 + object2.width/2
 && object2.x - object1.x < object1.width/2 + object2.width/2
 && object1.y - object2.y < object1.height/2 + object2.height/2
 && object2.y - object1.y < object1.height/2 + object2.height/2) {
   return true;
 } else {
   return false; 
 }
}
function damage(){
  var damage = 0.5 *weight *speed * speed / (thickness *thickness *thickness);
  if(damage < 10){
    wall.shapeColor = rgb(104, 244, 0);
  } 
  if (damage > 10){
    wall.shapeColor = rgb(255, 0, 0)
  } 
}


