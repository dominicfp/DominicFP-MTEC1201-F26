//        D. F. P.        //
// 'Along the Grand Line' //
// For this semester, I am interested in exploring the theme of Piracy in Fiction. //
// This sketch ties into the theme I have chosen in that it is intended to portray //
// the ship of the fictional Straw Hat Pirates from the internationally acclaimed  //
// manga and anime series, One Piece by Eiichiro Oda. //

function setup()
{
// canvas size
  createCanvas(800, 800);

// canvas color
  background (116, 227, 253);
}

function draw()
{
// ocean + horizon
  stroke (0,0,0);
  fill (0, 60, 255);
  rect (0, 625, 800, 400);

// sun
  stroke (255, 244,0);
  fill (255, 244, 0);
  circle (100, 100, 120);
 
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
}