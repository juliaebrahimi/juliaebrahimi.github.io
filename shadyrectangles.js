function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(49, 87, 69);
  
  var x1 = 0;
  var r1 = 10;
  
  while(x1 <= width) {
    fill(r1, 49, 87);
    square(x1, 100, 200);
    
    x1 += 3;
    r1 += 5;   
}
  var x2 = 0;
  
  while(x2 <= width) {
    fill(r1, 49, 87);
    square(x2, 0, 100);
    
    x2 += 3;
    r1 -= 5;   
}
  var y1 = 100;
  
  while(y1 <= height) {
    fill(r1, 49, 87);
    square(300, y1, 100);
    
    y1 += 3;
    r1 += 5;   
}
}
