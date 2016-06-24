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
var opString = [];
var counter = 0;

// if the number loop below comes across a click, this function will run
function getValue(evt) {
  var enteredNumber = String(evt.target.value);
  console.log(enteredNumber);
  currentString[counter] = currentString + enteredNumber;
  input.innerText = currentString;
  }

// Loop for if number buttons are clicked, then go ^
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', getValue);
  var value = String(number[i].value);
}

// loop for operators - maybe include these in the same loop above and then use an if, else if statements to check if values are operators or numbers, then add event listeners to the operators.
function getOperator(evt) {
  var enteredOperator = String(evt.target.value);
  console.log(enteredOperator);
  opString[counter] = opString + enteredOperator;
  input.innerText = currentString + opString;
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', getOperator);
  var operator = String(operator[i].value);
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
