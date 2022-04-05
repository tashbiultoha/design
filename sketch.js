//color variables 
let x;
let y; 
let r;
let g;
let b;
let a;
let size;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0)
}

function draw() {
  //calling the variables 
  x = random(0, windowWidth)
  y = random(0, windowHeight)
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
  a = random(0,255)
  size = random(0,255)
  
//main drawing (shapes)  
  fill(r,g,b,a)
  noStroke()
  circle(x,y, size)
}

function mousePressed(){
  background(0)
}