// when a .number button is clicked, store that value in a variable called number1

// create functions for each operator

// if certain operator is clicked, run that function that brings in number1 and then creates a new variable called number2, then make the math happen and store that result.

// show the result in the .output div once the .equals button is clicked.


var input = document.querySelector('.result');
var number = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var divide = document.querySelector('#divide');
var equals = document.querySelector('equals');
var clear = document.querySelector('#clear');
var num1 = input.value;
var currentValue = String(input.innerHTML);
var lastChar = currentValue[currentValue.length-1];

function getValue(evt) {
  var totalValue = String(evt.target.value) + currentValue;
  console.log(totalValue);
  input.innerText = totalValue;
}

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', getValue);
  var value = String(number[i].value);
}

// function calculate (evt) {
// // if the current input is not blank, do this
// if (currentValue !== '') {
//   var answer = currentValue / evt.target.value;
//   console.log(answer);
// }
// }
//
// equals.addEventListener('click', calculate);



clear.addEventListener('click', function() {
  input.innerText = '';
});












// WORKS:
// var numbers = document.querySelectorAll('.number');
// document.addEventListener('click', function(evt) {
//   console.log(evt.target.value);
//   if (evt.target.value === '0' || evt.target.value === '1' || evt.target.value === '2' || evt.target.value === '3' || evt.target.value === '4' || evt.target.value === '5' || evt.target.value === '6' || evt.target.value === '7' || evt.target.value === '8' || evt.target.value === '9') {
//   document.querySelector('.result').innerText = evt.target.value;
//   var number1 = evt.target.value;
//   }
// });

// var zero = document.querySelector('#zero');
// var one = document.querySelector('#one');
// var two = document.querySelector('#two');
// var three = document.querySelector('#three');
// var four = document.querySelector('#four');
// var five = document.querySelector('#five');
// var six = document.querySelector('#six');
// var seven = document.querySelector('#seven');
// var eight = document.querySelector('#eight');
// var nine = document.querySelector('#nine');
//
// var divide = document.querySelector('#divide');
// var multiply = document.querySelector('#multiply');
// var add = document.querySelector('#add');
// var subtract = document.querySelector('#subtract');
