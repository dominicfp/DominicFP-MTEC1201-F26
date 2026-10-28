//        D. F. P.        //
// 'Along the Grand Line' //
// For this semester, I intend to explore the theme of Piracy in Fiction. //
// This sketch ties into the chosen theme in that it is intended to portray //
// the ship of the fictional Straw Hat Pirates from the internationally acclaimed //
// manga and anime series, One Piece by Eiichiro Oda. //

// Press the Mouse 1 button to speed up the cloud movements. //
// Once clouds are entirely out of frame, press Mouse 1 to reset their position. //


let cloudX = 800
let circleX = 100


function setup()
{
// canvas size
  createCanvas(800, 800);
}

function draw()
{
// sky
  background (116, 227, 253);

// ocean + horizon
  stroke (0,0,0);
  fill (0, 60, 255);
  rect (0, 625, 800, 400);

// sun
  stroke (255, 244,0);
  fill (255, 244, 0);
  circle (circleX, 100, 120);
 
// hull
  stroke (4);
  fill (157, 85, 0);
  arc (620, 600, 220, 130, 0, PI);

// foremast sail
  stroke (4);
  fill (255,255,255);
  rect (528, 515, 85, 75);

// foremast 
  stroke (2);
  fill (157, 85, 0);
  rect (570, 510, 5, 90);

// mizzenmast sail
  stroke (4);
  fill (255,255,255);
  rect (640, 493, 65, 45);

// mizzenmast 
  stroke (2);
  fill (157, 85, 0);
  rect (670, 490, 5, 110);

// mizzenmast staysail
  stroke (4);
  fill (255,0,0);
  rect (675, 545, 50, 50);

// top cloud
  fill (255,255,255);
  ellipse (cloudX - 175, 90, 185, 20);

// middle cloud
  fill (255,255,255);
  ellipse (cloudX - 110,  180, 238, 25);

// bottom cloud
  fill (255,255,255);
  ellipse (cloudX - 25, 270, 300, 30);

// crude seagull shape cursor follow
// push pop codes i learned from my friend who was helping me through the code
  push();
  strokeWeight(3)
  line(mouseX - 25, mouseY - 25,  mouseX, mouseY);
  line(mouseX + 25, mouseY - 25,  mouseX, mouseY);
  pop();

// random thunder 1 (center)
  push();
  frameRate (2);
  let x = random (0, 175);
  let y = random (0, 175);
  fill(250,200,0);
  strokeWeight(1.5);
  stroke();
  beginShape();
  vertex(219 + x, 185 + y);
  vertex(160 + x, 230 + y);
  vertex(176 + x, 230 + y);
  vertex(145 + x, 270 + y);
  vertex(215 + x, 215 + y);
  vertex(195 + x, 215 + y);
  endShape(CLOSE);
  pop ();

// random thunder 2 (bottom right)
  push();
  frameRate (2);
  fill(250,200,0)
  strokeWeight(1.5);
  stroke();
  beginShape();
  vertex(319 + x, 285 + y);
  vertex(260 + x, 330 + y);
  vertex(276 + x, 330 + y);
  vertex(245 + x, 370 + y);
  vertex(315 + x, 315 + y);
  vertex(295 + x, 315 + y);
  endShape(CLOSE);
  pop ();

// random thunder 3 (top left)
  push();
  frameRate (2);
  fill(250,200,0)
  strokeWeight(1.5);
  stroke();
  beginShape();
  vertex(119 + x, 85 + y);
  vertex(60 + x, 130 + y);
  vertex(76 + x, 130 + y);
  vertex(45 + x, 170 + y);
  vertex(115 + x, 115 + y);
  vertex(95 + x, 115 + y);
  endShape(CLOSE);
  pop ();

// random thunder 4 (bottom left)
  push();
  frameRate (2);
  fill(250,200,0)
  strokeWeight(1.5);
  stroke();
  beginShape();
  vertex(119 + x, 285 + y);
  vertex(60 + x, 330 + y);
  vertex(76 + x, 330 + y);
  vertex(45 + x, 370 + y);
  vertex(115 + x, 315 + y);
  vertex(95 + x, 315 + y);
  endShape(CLOSE);
  pop ();

// random thunder 5 (top right)
  push();
  frameRate (2);
  fill(250,200,0)
  strokeWeight(1.5);
  stroke();
  beginShape();
  vertex(319 + x, 85 + y);
  vertex(260 + x, 130 + y);
  vertex(276 + x, 130 + y);
  vertex(245 + x, 170 + y);
  vertex(315 + x, 115 + y);
  vertex(295 + x, 115 + y);
  endShape(CLOSE);
  pop ();

// cloud movement speed variable + playing with booleans
  if (mouseIsPressed === true) {
    cloudX  = cloudX - 195;
} else if (mouseIsPressed === false) {
    cloudX = cloudX - 25;
} else {
    cloudX = 800;
}   
   
}

function mousePressed()
{
  loop ();
  cloudX = cloudX - 75;

  if (cloudX < -100)
  {
    cloudX = 800;
  }

}