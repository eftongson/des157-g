'use strict';

console.log('feed me');

/* Captures the video camera and adds a filter
   Run local sever to see in Firefox
   */
'use strict';

// send a message to the console
console.log('reading js');

var capture;
var capture2;
var imageXY = 400;

function setup() {

  createCanvas(imageXY, imageXY);
  // create video capture
  capture = createCapture(VIDEO);
  // video capture size
  capture.size(imageXY, imageXY);
  capture.hide(); // remove comment to hide video

  createCanvas(imageXY, imageXY);
  // create video capture
  capture2 = createCapture(VIDEO);
  // video capture size
  capture2.size(imageXY, imageXY);
  capture2.hide(); // remove comment to hide video
}

function draw() {
  background(255);
  image(capture, 0, 0, 640, 480);
  filter('INVERT');// change filters: THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
  capture.parent('myPost1');

  // background(255);
  // image(capture2, 0, 0, 640, 480);
  // filter('BLUR', 7);
  // capture2.parent('myPost2');
}
