//        D. F. P.        //
// 'Along the Grand Line' //
// For this semester, I intend to explore the theme of Piracy in Fiction. //
// This sketch ties into the chosen theme in that it is intended to portray //
// the ship of the fictional Straw Hat Pirates from the internationally acclaimed //
// manga and anime series, One Piece by Eiichiro Oda. //


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
  rect (570, 510, 5, 90)

// mizzenmast sail
  stroke (4);
  fill (255,255,255);
  rect (640, 493, 65, 45);

// mizzenmast 
  stroke (2);
  fill (157, 85, 0);
  rect (670, 490, 5, 110)

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
//push pop codes i learned from my friend who was helping me through the code
  push();
  strokeWeight(3)
  line(mouseX - 25, mouseY - 25,  mouseX, mouseY);
  line(mouseX + 25, mouseY - 25,  mouseX, mouseY);
  pop();

}

function mousePressed(){
  cloudX= cloudX-35
}