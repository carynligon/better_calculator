// Still not fully functioning.
// Order of operations, negative sign, and percentage not working properly


var input = document.querySelector('.result');
var number = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var equals = document.querySelector('.equals');
var clear = document.querySelector('#clear');
var percent = document.querySelector('#percent');
var currentString = [''];
var opString = [''];
var counter = 0;
var selectedOperator = '';
var num1 = 0;
var num2 = 0;
var answer = 0;
var newNum = 0;


// if the number loop below comes across a click, this function will run
function getValue(evt) {
  var enteredNumber = String(evt.target.value);
  console.log(enteredNumber);
  if (input.innerText === '+' || input.innerText === '-' || input.innerText === 'x' || input.innerText === '/') {
    counter++;
    currentString[counter] = enteredNumber;
    input.innerText = enteredNumber;
  }
  else {
    currentString[counter] = currentString[counter] + enteredNumber;
    input.innerText = String(currentString[counter]);
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


clear.addEventListener('click', function() {
  input.value = '';
  input.innerHTML = '';
  counter = 0;
  currentString[counter] = '';
});

equals.addEventListener('click', mulDiv);

function mulDiv() {
  console.log(currentString);
  for (var i = 0; i < currentString.length; i++) {
    console.log(currentString.length, i);
    if (currentString[i] === 'x' || currentString[i] === '/') {
      num1 = currentString[i-1];
      num2 = currentString[i+1];
      if (currentString[i] === '/') {
        newNum = Number(num1)/Number(num2);
      } else if (currentString[i] === 'x') {
        newNum = Number(num1)*Number(num2);
      }
      currentString.splice(i-1, 3, newNum, '', '');
      console.log(newNum);
    } else if (i === currentString.length - 1) {
      addSub ();
    }
  }
}

// Fix
function addSub () {
  console.log(currentString);
  for (var i = 0; i < currentString.length; i++) {
    if (currentString[i] === '') {
      currentString.splice(i, 1);
      console.log(currentString);
    }
    else if (currentString[i] === '+' || currentString[i] === '-') {
      num1 = currentString[i-1];
      num2 = currentString[i+1];
      if (currentString[i] === '+') {
        newNum = Number(num1) + Number(num2);
      }
      else if (currentString[i] === '-') {
        newNum = Number(num1) - Number(num2);
      }
      currentString.splice(i-1, 3, newNum);
      console.log(newNum);
      input.innerText = newNum;
    }
    else if (i === currentString.length - 1) {
      answer = currentString[currentString.length - 1];
      input.innerText = answer;
    }
  }
}
  // Not working
//   else if (selectedOperator === '%') {
//     answer = num1/100;
//     input.innerText = answer;
//   }
//   else if (selectedOperator === '-/+') {
//     answer = num1 - 2*num1;
//   }
// }
