var life = 3;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var meta

function setup() {
  createCanvas(600,600)

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
    meta = createSprite(380,180,10,100);
meta.shapeColor="red"
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//Agrega velocidad para hacer que el auto se mueva.
car1.velocityY = 3;
car2.velocityY =- 3;
car3.velocityY = 3;
car4.velocityY =- 3;

}

function draw() {
   background("white");
   fill("green")
  textSize(18);
  text("Lives: " + life,200,100);
  strokeWeight(0);
  
  
  fill("lightblue");
  rect(0,120,52,140);
  fill("purple");
  rect(350,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
createEdgeSprites();
car1.bounceOff(boundary2);
car1.bounceOff(boundary1);
car2.bounceOff(boundary2);
car2.bounceOff(boundary1);
car3.bounceOff(boundary2);
car3.bounceOff(boundary1);
car4.bounceOff(boundary2);
car4.bounceOff(boundary1);



//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if (keyDown("d")) {
  sam.x=sam.x +2;
}
if (keyDown("a")) {
  sam.x=sam.x -2;
}



//Agregar la condición de reducir la vida de Sam si toca el carro.
if(sam.isTouching(car3)|| sam.isTouching(car2)){
  life=life-1
  sam.x=20
  sam.y=195
  
}
if (life<=0){
  sam.remove()
  textSize(20)
  fill("red")
  text("PERDISTE",200,30)
}

if(sam.isTouching(meta)){
  textSize(20)
  fill("blue")
  text("LLEGASTE",200,30)
}
  
 drawSprites();
}
