// Emilia Tongson 02-04-19. This is so that windows of information come up once the items are clicked
'use strict';

console.log('hi hello');

// first initialize and assign items
// var chapstick = document.querySelector('#chapstick');
// var earphones = document.querySelector('#earphones');
// var coughDrop = document.querySelector('#coughdrop');

var chapstick = document.querySelector('#chapstick');

// initialize and assign global variables

var chapstickOverlay = document.querySelector('#chapstickOverlay');
var earphonesOverlay = document.querySelector('#earphonesOverlay');
var coughdropOverlay = document.querySelector('#coughdropOverlay');
var description = document.querySelector('.description');
var close = document.querySelector('.close');
// temporary hack for close not working in multiple instances
var close2 = document.querySelector('.close2');
var close3 = document.querySelector('.close3');


// call addEventListener method on each object so that it invokes function to execute

chapstick.addEventListener('click', function() {
  chapstickOverlay.style.display = 'block';
})
earphones.addEventListener('click', function() {
  earphonesOverlay.style.display = 'block';
})
coughdrop.addEventListener('click', function() {
  coughdropOverlay.style.display = "block";
})

//call addEventListener method on X symbol so that it invokes function to close
close.addEventListener('click', function() {
  chapstickOverlay.style.display = 'none';
})

// temporary hack for close not working in multiple instances
close2.addEventListener('click', function() {
  earphonesOverlay.style.display = 'none';
})

close3.addEventListener('click', function() {
  coughdropOverlay.style.display = 'none';
})
