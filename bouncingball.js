var x = 200;
var y = 50;
var size = 100;
var dirY = 1;
var dirX = 1;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(164, 26, 74);
    ellipse(x, y, size);
    fill(141, 161, 220);

    y = y + 1*dirY;

    if (y >= height - size/2) {
        dirY = dirY*-1;
        y = y + 1*dirY;
    }

    if (y <= 0 + size/2) {
        dirY = dirY*-1;
        y = y + 1*dirY;
    }

}
function mousePressed() {
    x = x + 50*dirX;

    if (x >= width - size/2) {
        dirX = dirX*-1;
        x = x + 1*dirX;
    }

    if (x <= 0 + size/2) {
        dirX = dirX*-1;
        x = x + 1*dirX;
    }
}