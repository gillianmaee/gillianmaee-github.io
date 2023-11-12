var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img, img2, img3, img4, img5, img6; //image variable

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://gillianmaee.github.io/game/tbg.png'); // tulip background
  img2 = loadImage('https://gillianmaee.github.io/game/rbg.png'); // rose background
  img3 = loadImage('https://gillianmaee.github.io/game/dgb.png'); // daisy background
  img4 = loadImage('https://gillianmaee.github.io/game/pinktulip.png'); // tulip flower
  img5 = loadImage('https://gillianmaee.github.io/game/rose.png'); // rose flower
  img6 = loadImage('https://gillianmaee.github.io/game/daisy.png'); // daisy flower
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
    if (gameState=="win"){
     text("Garden is complete!", width/2, height-20);
  }
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(200, 100, 0);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);

      image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
  
} // end level two

function levelThree(){
    background(200, 100, 200);
      image(img, 0, 0, width, height);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>29){
// level 4
   gameState = "win";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
  
        image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} // end level thre
