'use strict';

// alert("This interface is best and should only be viewed on mobile.");

console.log('reading js. feed me');

/* Captures the video camera and adds a filter
   Run local sever to see in Firefox
   */

var capture1;
var capture2;
var imageXY = 375;
var yousernameHeight = 32;
// let fps = frameRate();

// use responsive for dimensions
var intViewportHeight = window.innerHeight;
console.log('intViewportHeight: ' + intViewportHeight);

// listens for different responsive dimensions
window.addEventListener('resize', function() {
  intViewportHeight = window.innerHeight;
  console.log('intViewportHeight: ' + intViewportHeight);
})


function setup() {

  var feed = createCanvas(imageXY, intViewportHeight * 8);
  // create video capture
  capture1 = createCapture(VIDEO);
  // video capture size
  capture1.size(imageXY, imageXY);
  capture1.hide(); // remove comment to hide video
  // parent it to section id in html
  feed.parent('feed');
  frameRate(15);
  background(0, 0, 0, 0);
  // frameRate(15);

  // var myPost2 = createCanvas(imageXY, imageXY);

  // capture2 = createCapture(VIDEO);
  //
  // capture2.size(imageXY, imageXY);
  // capture2.hide();
  // myPost2.parent('myPost2');

}

function draw() {

  image(capture1, 0, 4800 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 4000 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 3200 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 2400 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 1600 + yousernameHeight, 640, 480);
  filter('DILATE'); // change filters: THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.

  image(capture1, 0, 800 + yousernameHeight, 640, 480);
  filter('DILATE');

  image(capture1, 0, 0 + yousernameHeight, 640, 480);
  filter('ERODE');


}

// console.log("fps: " + frameRate());

// BLOTTER - Example 1
// var text = new Blotter.Text("InztanGrat", {
//   family : "'EB Garamond', sans-serif",
//   size : 27,
//   fill : "#202020"
// });
//
// var material = new Blotter.Material();
//
// var blotter = new Blotter(material, {
//   texts : text
// });
//
// var elem = document.getElementById("plain-text");
// var scope = blotter.forText(text);
//
// scope.appendTo(elem);
