let myQuestion = "what was the best part of you're week?"
 
let contents = "";

let button
let textBox; 
let refreshb
let c1,c2;

function setup() {

createCanvas(500, 400);
  c1 = color(255);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
  n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  
  button = createButton("show");
  button.position(220,80)
  button.mousePressed(showText)
  
  textBox = createInput("type your answer here")
  textBox.size(300,40)
  textBox.position(50,200)
  textBox.input(storeText)
  
  fill(0);
  textSize(14);
  text(myQuestion,120,50) 

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

