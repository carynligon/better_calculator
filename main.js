// when a .number button is clicked, store that value in a variable called number1

// create functions for each operator

// if certain operator is clicked, run that function that brings in number1 and then creates a new variable called number2, then make the math happen and store that result.

// show the result in the .output div once the .equals button is clicked.

// var numbers = document.querySelectorAll('.number');
// for (var i = 0; i < numbers.length; i++) {
//   var number1 = numbers[i];
//   var value = Number(numbers[i].value);
//   console.log(value);
// }
//
// getValue = function(i) {
//   console.log(value);
// };

var numbers = document.querySelectorAll('.number');
document.addEventListener('click', function(evt) {
  console.log(evt.target.value);
  if (evt.target.value === '0' || evt.target.value === '1' || evt.target.value === '2' || evt.target.value === '3' || evt.target.value === '4' || evt.target.value === '5' || evt.target.value === '6' || evt.target.value === '7' || evt.target.value === '8' || evt.target.value === '9') {
  document.querySelector('.result').innerText = evt.target.value;
  }
});

// numbers[i].addEventListener('click', getValue(i));
// e.target
