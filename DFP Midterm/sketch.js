//        D. F. P.        //
// 'Along the Grand Line' //
// For this semester, I want to explore the theme of Piracy in Fiction. //
// This sketch ties into the theme in that it portrays the ship //
// of the fictional Straw Hat Pirates from the manga and anime series One Piece. //


// declaring variables
let cloudX = 800
let circleX = 100

// gamescreen skyfish image variable
let img;

// bird cursor image variable
let img2;

// one piece logo image for pregame screen variable
let img3;

// pregame skyfish image variable
let img4;

async function setup()
{
// canvas size
  createCanvas(800, 800);

// call skyfish image
  img = await loadImage ('png-assets/fish.png');

// call marine logo image
  img2 = await loadImage ('png-assets/bird.png');

// call one piece logo image
  img3 = await loadImage ('png-assets/op_logo_rs.png');

// call pregame skyfish image
  img4 = await loadImage ('png-assets/fish_pgs_rs.png');
}

function draw()
{
  pregameScreen();
}

function keyPressed()
{
  if (key === ' ') {
    gameScreenBackground();
  }
}

function pregameScreen()
{
  background (0, 157, 255);
  textSize(50);
  textFont('Comic Sans MS');
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('One Piece: Skypeia Skyfish Catch', 400, 415);
  textSize(30);
  text('Press SPACEBAR to Start', 400, 500);
  image (img3, 80, 100);
  image (img4, 18, 600); // left fish
  image (img4, 310, 600); // center fish
  image (img4, 590, 600); // right fish

}

function gameScreenBackground()
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

// crude seagull shape cursor follow
  imageMode(CENTER);
  image(img2, mouseX, mouseY);


// cloud movement speed variable + playing with booleans
  if (mouseIsPressed === true) {
    cloudX  = cloudX - 195;
} else if (mouseIsPressed === false) {
    cloudX = cloudX - 25;
} else {
    cloudX = 800;
}

// skyfish image
  imageMode(CENTER);
  image(img, 400 - x * 2, 765 - y *.5, 90, 90);

// sketch running time variable
  let s = millis() / 1000;

// runtime text format
  textAlign(CENTER, CENTER);
  textSize(35);
  textFont('Papyrus');

// sketch runtime text display
  text(`Running Time: ${nf(s, 1, 1)} S`, 200, 750, 810);
}

function cloudSpeedVariable()
{
  loop ();
  cloudX = cloudX - 75;

  if (cloudX < -100)
  {
    cloudX = 800;
  }

}