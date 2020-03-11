//Creating the variables
var placeX = 0;
var placeY = 0;
var size = 70;
var dirX = 1;
var dirY = 1;

//Setting up the canvas and the background color
function setup() {
    createCanvas(400, 400);
    background(186, 225, 229);
}

function draw() {
    //Creating a purple square
    square(placeX, placeY, size);
    fill(229, 186, 220);

    //Increasing placeX and placeY
    placeX = placeX + 1*dirX
    placeY = placeY + 1*dirY;

    //Having placeX flip directions when the square hits the edge of the canvas on the right side
    if (placeX > width - size) {
        dirX = dirX*-1;
        placeX += 1 * dirX;
    }
    //Having placeY flip directions when the square hits the edge of the canvas onn the right side
    if (placeY > height - size) {
        dirY = dirY*-1;
        placeY += 1 * dirY;
    }
    //Having placeX flip directions when the square hits the edge of the canvas on the left side
    if (placeX < 0) {
        dirX = dirX*-1;
        placeX += 1 * dirX;
    }
    //Having placeY flip directions when the square hits the edge of the canvas on the left side
    if (placeY < 0) {
        dirY = dirY*-1;
        placeY += 1 * dirY;
    }
}
