// Emilia Tongson 02-04-19. This is so that windows of information come up once the items are clicked
'use strict';

console.log('hi hello');

// first initialize and assign items
// var chapstick = document.querySelector('#chapstick');
// var earphones = document.querySelector('#earphones');
// var coughDrop = document.querySelector('#coughDrop');

var title = document.querySelector('#title');

// initialize and assign global variables

var overlay = document.querySelector('#overlay');
var close = document.querySelector('#close');

// call addEventListener method on each object so that it invokes function to execute

// document.getElementById('chapstick').addEventListener('click', function() {
//   overlay.style.display = 'block';
// });
// document.getElementById('earphones').addEventListener('click', function() {
//   overlay.style.display = 'block';
// });
// document.getElementById('coughDrop').addEventListener('click', function() {
//   overlay.style.display = 'block';
// })

title.addEventListener('click', function() {
  overlay.style.display = 'block';
})

//call addEventListener method on each object so that it invokes function to close
title.addEventListener('close', function() {
  console.log('is close an event?');
  overlay.style.display = 'none';
})
