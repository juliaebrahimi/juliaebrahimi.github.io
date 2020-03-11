//Defining the variable countPress and setting it to 0
var countPress;
countPress = 0;

//Creating the canvas and making it a nice green tea color
function setup() {
    createCanvas(400, 400);
    background(204, 229, 186);
}

//Making a shape that appears when you click, it is a light purple and stretches differently depending on where the mouse is when you click, one point in the shape is always at the center of the canvas
function mousePressed() {
    fill(211, 186, 229);
    quad(mouseX, mouseY, mouseX +20, mouseY + 20, mouseX - 20, mouseY + 20, 200 ,200);
    //Each time you click the mouse you add 1 to countPress and it is printed
    countPress++;
    print(countPress);
}
