
var hr, min, sec;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
 
  angleMode(DEGREES);
 
}

function draw() {
  background(0);  
  hr = hour();
  min = minute();
  sec = second();
  console.log(hr + ":" + min +":" +sec)

  
  
  var secAngle = map(sec, 0,60,0,360)
  var minAngle = map(min, 0,60,0,360);
  var hrAngle = map(hr%12,0,12,0,360)
   
 
 //
 
 //angleMode(DEGREES)
  translate(width/2,height/2)
  rotate(-90)

  //seconds
  stroke("red");
  strokeWeight(5);
  
  push();
  
  rotate(secAngle)
  line(0,0,100,0)
   
  pop();

  noFill();
  arc(0,0,200,200,0,secAngle);

  stroke("blue");
  strokeWeight(7)
  
  push();

  rotate(minAngle)
  line(0,0,80,0)
  
  pop();

  noFill();
  arc(0,0,150,150,0,minAngle);

 

  stroke("green");
  strokeWeight(9)
  push();
  rotate(hrAngle)
  line(0,0,60,0)
  
  pop();
  
  noFill();
  arc(0,0,100,100,0,hrAngle);
  
  drawSprites();
}