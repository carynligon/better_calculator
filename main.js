// When user clicks on a number:
// IF the result box currently has an input with a number, we just need to concat the additional numbers clicked to make that full number.
// IF the result box currently has an input with an operator, we need to store this new number in a separate array index and check again if they select additional numbers.

// When user clicks on an operator:
// IF the result box currently has an input with a number, we need to store the selected operator in a new index array
// IF the result box currently has an input with a different operator, we need to replace that operator with the newly selected one
// IF the result box is empty, do nothing

// When user clicks equals sign:
// IF the result box currently has an array with full indicies 0-2, do math
// OTHERWISE do nothing


var input = document.querySelector('.result');
var number = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var equals = document.querySelector('.equals');
var clear = document.querySelector('#clear');
var currentString = [''];
var opString = [''];
var counter = 0;
var selectedOperator = '';
var num1 = 0;
var num2 = 0;
var answer = 0;

// if the number loop below comes across a click, this function will run
function getValue(evt) {
  var enteredNumber = String(evt.target.value);
  console.log(enteredNumber);
  if (input.innerText === '+' || input.innerText === '-' || input.innerText === 'x' || input.innerText === '/') {
    counter++;
    currentString[counter] = enteredNumber;
    input.innerText = enteredNumber;
    storeValues();
  }
  else {
    currentString[counter] = currentString[counter] + enteredNumber;
    input.innerText = String(currentString[counter]);
    storeValues();
  }
}

// Loop for if number buttons are clicked, then go ^
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', getValue);
}

// loop for operators - maybe include these in the same loop above and then use an if, else if statements to check if values are operators or numbers, then add event listeners to the operators.
function getOperator(evt) {
  counter++;
  var enteredOperator = String(evt.target.value);
  console.log(enteredOperator);
  currentString[counter] = enteredOperator;
  input.innerText = enteredOperator;
}

// loop for checking for events on operators, then go up ^
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', getOperator);
}

// MATH

function storeValues () {
  for (i = 0; i < currentString.length; i++) {
    if (currentString[i] === '+' || currentString[i] === '-' || currentString[i] === 'x' || currentString[i] === '/') {
      selectedOperator = currentString[i];
    }
    else if (currentString[i-1] === '+' || currentString[i-1] === '-' || currentString[i-1] === 'x' || currentString[i-1] === '/') {
      num2 = Number(currentString[i]);
    }
    else {
      num1 = Number(currentString[i]);
    }
  }
}

equals.addEventListener('click', calculate);

function calculate() {
  if (selectedOperator === '+') {
    answer = num1 + num2;
    input.innerText = answer;
  }
  else if (selectedOperator === '-') {
    answer = num1 - num2;
    input.innerText = answer;
  }
  else if (selectedOperator === '/') {
    answer = num1/num2;
    input.innerText = answer;
  }
  else if (selectedOperator === 'x') {
    answer = num1*num2;
    input.innerText = answer;
  }
}

// Needs to be fixed
clear.addEventListener('click', function() {
  currentString = [];
  input.innerText = '';
});
