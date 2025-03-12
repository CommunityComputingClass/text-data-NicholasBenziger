let myQuestion = "what was the best part of you're week?"
 
let contents = "";

let button
let textBox; 
let refreshb

function setup() {
  createCanvas(500, 400);
  button = createButton("show");
  button.position(220,80)
  button.mousePressed(showText)
  
  textBox = createInput("type your answer here")
  textBox.size(300,40)
  textBox.position(50,200)
  textBox.input(storeText)
  
  background(50);
  fill(255);
  textSize(14);
  text(myQuestion,50,50) 

  refreshb = createButton("reload");
  refreshb.position(220,300)
  refreshb.mousePressed(refresh)
}

function draw() {
  
}

function showText(){ 
   text(contents,50,200)
   textBox.hide(); 
   
}

function storeText(){
  contents = this.value(); 
}

function refresh () {
location.reload()
}
