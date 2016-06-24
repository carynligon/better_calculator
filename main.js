// when a .number button is clicked, store that value in a variable called number1

// create functions for each operator

// if certain operator is clicked, run that function that brings in number1 and then creates a new variable called number2, then make the math happen and store that result.

// show the result in the .output div once the .equals button is clicked.


var input = document.querySelector('.result');
var number = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var equals = document.querySelector('equals');
var clear = document.querySelector('#clear');
var currentString = [];

// if the number loop below comes across a click, this function will run
function getValue(evt) {
  var enteredNumber = Number(evt.target.value);
  console.log(enteredNumber);
  input.innerText = enteredNumber;
  var addArray = currentString.push(enteredNumber);
  concatenate();
}

function getOperator(evt) {
  var enteredOperator = String(evt.target.value);
  console.log(enteredOperator);
}

// Loop for if number buttons are clicked
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', getValue);
  var value = String(number[i].value);
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', getOperator);
  var operator = String(operator[i].value);
}

function concatenate() {
  var counter = currentString.length;
  if (typeof currentString[counter] === number) {
      console.log('hi');
  }
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
