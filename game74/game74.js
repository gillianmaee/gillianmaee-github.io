var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img, img2, img3, img4, img5, img6, img7; //image variable

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
  img7 = loadImage('https://gillianmaee.github.io/game/garden.png'); // garden
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
       image(img7, 0, 0, width, height)
      text("Garden is complete!", width/2, height-20);
     
  }
  text(("Number of Flowers: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  image(img, 0, 0, width, height);
  text("Tulips", width/2, height-20);
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
  
  // ellipse(ballx, bally, ballSize, ballSize);
  image(img4, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  image(img2, 0, 0, width, height);
  text("Roses", width/2, height-20);
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
  // ellipse(ballx, bally, ballSize, ballSize);

      image(img5, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
  
} // end level two

function levelThree(){
   // background(200, 100, 200);
      image(img3, 0, 0, width, height);
  text("Daisies", width/2, height-20);
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
  // ellipse(ballx, bally, ballSize, ballSize);
  
        image(img6, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} // end level three
