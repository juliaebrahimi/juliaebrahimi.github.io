var x = 200;
var y = 50;
var size = 100;
var dirY = 1;
var dirX = 1;
var r = 141;
var g = 161;
var b = 220;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(164, 26, 52);
  ellipse(x, y, size);
  fill(r, g, b);
  move();
}

function move() {
y = y + 1*dirY;
  if (y >= height - size/2 ||y <= 0 + size/2) {
    dirY = dirY*-1;
    y = y + 1*dirY;
      }
}

function mousePressed() {
  x = x + 50*dirX;
  
  if (x >= width - size/2 || x <= 0 + size/2) {
    dirX = dirX*-1;
    x = x + 1*dirX;
    r = r + 100
    g = g + 100
    b = b + 100
      }
}
