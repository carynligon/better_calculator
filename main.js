var input = document.querySelector('.result');
var number = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var negPos = document.querySelector('#neg-pos');
var equals = document.querySelector('.equals');
var clear = document.querySelector('#clear');
var selectedOperator = '';
var num1 = '';
var num2 = '';
var answer = 0;
var moreOperators = [];
var moreNums = [];

// Loop for if number buttons are clicked, then go to getValue():
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', getValue);
}

function getValue(evt) {
  var enteredNumber = String(evt.target.value);
  console.log(enteredNumber);

  if (selectedOperator === '' && num1 === '') {
    num1 = enteredNumber;
    input.innerText = num1;
  }
  else if (input.innerText === '-' && num2 === '' && selectedOperator !== '-') {
    num1 = '-' + enteredNumber;
    input.innerText = num1;
  }
  else if (selectedOperator === '' && num1 !== '' && num2 === '') {
    num1 += enteredNumber;
    input.innerText = num1;
  }
  else if (selectedOperator !== '' && num2 === '') {
    num2 = enteredNumber;
    input.innerText = num2;
  }
  else if (selectedOperator !== '' && num2 !== '') {
    num2 += enteredNumber;
    input.innerText = num2;
  }
}

// loop for checking for events on operators, then go to getOperator function
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', getOperator);
}

function getOperator(evt) {
  selectedOperator = String(evt.target.value);
  console.log(selectedOperator);
  input.innerText = selectedOperator;
}

clear.addEventListener('click', function() {
  input.value = '';
  input.innerHTML = '';
  num1 = '';
  num2 = '';
  selectedOperator = '';
});

// When you hit equals button, go to calculate() function
equals.addEventListener('click', calculate);

// MATH
function calculate() {
  if (selectedOperator === '+') {
    answer = Number(num1) + Number(num2);
    input.innerText = answer;
    console.log(answer);
  }
  else if (selectedOperator === '-') {
    answer = Number(num1) - Number(num2);
    input.innerText = answer;
    console.log(answer);
  }
  else if (selectedOperator === '/') {
    answer = Number(num1)/Number(num2);
    input.innerText = answer;
    console.log(answer);
  }
  else if (selectedOperator === 'x') {
    answer = Number(num1)*Number(num2);
    input.innerText = answer;
    console.log(answer);
  }
  else if (selectedOperator === '%') {
    answer = Number(num1)/100;
    input.innerText = answer;
    console.log(answer);
  }
}

// What happens when you click the neg/pos button:
negPos.addEventListener('click', negOrPos);

function negOrPos () {
  if (num1 === '' && input.innerText !== '-') {
    input.innerText = '-';
  }
  else if (num1 !== '') {
    num1 = num1 - (num1 * 2);
    input.innerText = num1;
  }
  else if (input.innerText === '-' && selectedOperator !== '-') {
    input.innerText = '';
  }
}
