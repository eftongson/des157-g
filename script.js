console.log('reading js');

//place processing file, turn into js:

function setup() {
  var myCanvas = createCanvas(800, 250);
  background(255);
  //connect myCanvas to mySketch
  myCanvas.parent('mySketch');
}

function draw() {

  //speed of drawing
  frameRate(250);


  //grid
  for (var i=0; i<=width; ) {
    for (var j=0; j<=height; ) {
      stroke(255);
      strokeWeight(1);
      line(i+5, j, i-5, j);
      line(i, j+5, i, j-5);

      j+=50;
    }
    i+=50;
  }


  //draw with cursor
  if (mouseIsPressed==true) {
    noStroke();
    fill(random(150, 255), random(150, 255), random(200, 255), 150);
    ellipse(mouseX, mouseY,60, 60);
  }


  //border around banner
  stroke(255);
  line(799, 799, 0, 799);
  line(799, 0, 799, 799);
  line(0, 249, 799, 249);
  line(0, 0, 799, 0);
  line(0, 0, 0, 799);
  strokeWeight(1);
}
