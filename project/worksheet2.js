let myMessage = "press left arrow if you like car and right arrow if you don't"

let likes = 0; 
let dislikes = 0; 

let LikesM = "Likes Cars"
let NoLikesM = "Doesn't Like Cars"

function setup() {
  createCanvas(400, 400);
  background(50);
  noStroke();
  fill(255);
  text(myMessage, 30, 50);
}
function draw() { 
  fill("pink")
  rect(130,100,likes,30)
  
  fill("green")
  rect(130,200, dislikes, 30)

  fill('white')
  text(LikesM,10,120)

  fill('white')
  text(NoLikesM,10,220)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    likes = likes +1;
  }  
  if(keyCode === RIGHT_ARROW){
    dislikes = dislikes +1;
  }    
}