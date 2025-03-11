let myFont; 
let myMessage = "hey there"

function preload(){
  myFont = loadFont("splashpoint.otf")
}

function setup() {
  createCanvas(400, 400);
  
 
}

function draw(){
    background(55);
    fill('white');
    quad(200, 80, 350, 200, 200, 310, 50, 200)
    fill('pink')
    square(125,120,150,50)
    fill('red')
    circle(200,195,100)
    fill(255) 
    textFont(myFont)
    text(myMessage, 175, 200);
   
    
}