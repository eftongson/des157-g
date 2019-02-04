// js for milk tea maker. 01-28-19 Emilia Tongson

'use strict';

console.log('reading js');

// listen for user to click Place Order
document.querySelector('#submit').addEventListener('click',processForm);

// define processForm function
function processForm(evt){
  // capture value of the fields!
  var size = document.querySelector('#size');
  var tea = document.querySelector('#tea');
  var milk=document.querySelector('#milk');
  var fruit=document.querySelector('#fruit');
  var sugarLevel = document.querySelector('#sugarLevel').value;
  var iceLevel = document.querySelector('#iceLevel').value;
  var userName=document.querySelector('#userName').value;
  //declare a variable that creates the output message
  var myMsg=document.querySelector('#myMsg').value;
  // use innerHTMl to concatenate the above variables into the output message,
  // targeting the output id
  document.getElementById("myMsg").innerHTML= size+" "+fruit+" "+milk+" "tea+" "+sugarLevel+"percent sweet, "+iceLevel+"percent ice, "+"milk tea for "+userName+"!";
  // prevent page from reloading
  evt.preventDefault();

}
