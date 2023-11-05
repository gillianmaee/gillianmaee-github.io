var img;
var initials ='gd'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function


  if (toolChoice == '1' ) {  // (crust)
   
    stroke(224, 174, 121);
    strokeWeight(35);
    fill(247, 200, 151);
    circle(mouseX, mouseY, 400, 400);
   
  } else if (toolChoice == '2') { // (sauce)

    stroke(176, 23, 23, 95);
    strokeWeight(50);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // (cheese)

    stroke(247, 218, 161);
    strokeWeight(50);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // (pepperoni)

    stroke(122, 17, 17);
    strokeWeight(2);
    fill(156, 33, 33);
    circle(mouseX, mouseY, 40, 40);
  } else if (key == '5') { // this tool calls a function (mushroom)
      
    stroke(64, 50, 39);
    strokeWeight(2);
    fill(204, 176, 155);
    arc(pmouseX, pmouseY, 30, 30, PI, TWO_PI);
    fill(204, 176, 155);
    rect(pmouseX-3, pmouseY, 5, 13, 5);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { // (green peppers)
    
    stroke(69, 130, 57);
    strokeWeight(8);
    noFill();
    arc(pmouseX, pmouseY, 40, 40, QUARTER_PI, PI);

  } 
  
  else if (toolChoice == '7') { // (black olives)
    
    stroke(28, 26, 22);
    strokeWeight(8);
    noFill();
    circle(mouseX, mouseY, 15, 15);
  } 
  
  else if (toolChoice == '8') { // (sausage)

  stroke(99, 64, 31);
  strokeWeight(2);
  fill(128, 86, 47);
  rect(pmouseX-3, pmouseY, 20, 15, 20);
  } 
  
  else if (toolChoice == '9') { // (onions)

  stroke(92, 79, 112);
  strokeWeight(5);
  noFill();
  circle(mouseX, mouseY, 35, 35);
  stroke(171, 163, 184);
  strokeWeight(3);
  noFill();
  circle(mouseX, mouseY, 30, 30);
  } 
  
  else if (toolChoice == '0') { // (extra cheese)
    
    fill(255, 243, 219);
    strokeWeight(0);
    ellipse(pmouseX, pmouseY-4, 6, 6);
    ellipse(pmouseX+25, pmouseY+2, 6, 6);
    ellipse(pmouseX+17, pmouseY-13, 6, 6);
  } 
  
  else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
