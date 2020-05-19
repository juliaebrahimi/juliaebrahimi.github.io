function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  flower(100, 100, 0, 0, 25);
  flower(300, 100, 45, 70, 200);
  flower(200, 200, 200, 30, 40);
    
    

    
}


function flower (x, y, r, g, b) {
  fill(0, 250, 0);  //green
  rect(x-10, y, 20, 150); //stem
  fill(r, g, b); //pick color
  ellipse(x, y, 150);  //inner circle
  fill(250, 250, 0);    //yellow
  ellipse(x, y, 70); //outer circle

    
}
