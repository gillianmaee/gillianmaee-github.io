function setup() {
 createCanvas(600, 600); 
}

function draw() {
background(248, 200, 220);
ellipse(300, 325, 245, 345); // back hair
  fill (232, 189, 151); //skin color
ellipse(300, 290, 180, 215); //face
  fill (28, 25, 22); //lash color
strokeWeight(0); // eye outline
ellipse(253, 285, 50, 50);//outline of right lash
ellipse(353, 285, 50, 50);// outline of left lash
  fill (237, 226, 218); //eye base color
ellipse(255, 288, 50, 50);//outline of right eye
ellipse(350, 288, 50, 50);// outline of left eye
strokeWeight(0); // for everything
  fill (23, 18, 15); //iris color
ellipse(255, 285, 35, 45); // right iris
ellipse(350, 285, 35, 45); // left iris
  fill (217, 215, 215); // lower highlight color
ellipse(263, 275, 10, 10); // right eye highlight
ellipse(358, 275, 10, 10); // left eye highlight
strokeWeight(0); // eye outline
  fill (140, 108, 90)// highlight color
ellipse(255, 295, 30, 20); // right big eye highlight
ellipse(350, 295, 30, 20); // left big eye highlight
    fill (18, 17, 16)// color for pupil
ellipse(255, 285, 15, 25);//outline of right pupil
ellipse(350, 285, 15, 25);// outline of left pupil
  fill (232, 189, 151); //skin color
ellipse(250, 280, 5, 5); // right tiny eye highlight
ellipse(345, 280, 5, 5); // left tiny eye highlight
  rect(230, 310, 150, 13); // coverup
  fill(232, 189, 151); // neck skin color
strokeWeight(1); // coverup outline
line(235, 250, 275, 245); // right brow
line(325, 245, 365, 250) // left brow
line(222, 273, 230, 278) // right lash
line(226, 267, 233, 272) // right lash
line(374, 278, 383, 271) // left lash
line(370, 272, 376, 265) // left lash
line(300, 320, 300, 325) // nose
line(290, 360, 300, 360) // lip
line(305, 360, 315, 360) // lip
 push(); // right bang
  strokeWeight(0);
  rotate(0.70);
  fill(28, 20, 12);
  ellipse(325, 30, 70, 175);
  pop();
 push(); // left bang
  strokeWeight(0);
  rotate(-0.70);
  fill(28, 20, 12);
  ellipse(133, 415, 70, 175);
  pop();
rect(282, 398, 40, 22); // neck
ellipse
  fill(0, 0, 0) // shirt color
rect(188, 420, 225, 415) // body
  fill(232, 189, 151); // neck skin color
 arc(302, 421, 50, 50, 0, PI + TWO_PI, OPEN) 
 fill (28, 20, 12); // back hair color




}
