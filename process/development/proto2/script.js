'use strict';

console.log('feed me');

/* Captures the video camera and adds a filter
   Run local sever to see in Firefox
   */

var capture;

var imageXY = 375;

function setup() {
 var myPost1 = createCanvas(imageXY, imageXY);
  // create video capture
  capture = createCapture(VIDEO);
  // video capture size
  capture.size(imageXY, imageXY);
  capture.hide(); // remove comment to hide video

  myPost1.parent('myPost1');

}

function draw() {
  background(255);
  image(capture, 0, 0, 640, 480);
  filter('INVERT');// change filters: THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
  // capture.parent('myPost1');

}
