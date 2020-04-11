function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(14, 105, 193);
  
  for(var x = 0; x <= width; x += 50) {
    for(var y = 0; y<= height; y += 50) {
      fill(105, 193, 14);
      ellipse(x, y, random(50), random(50));
    }
  }
}
