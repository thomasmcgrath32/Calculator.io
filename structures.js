const calculator = {
  displayValue: '',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}
updateDisplay();

/* Checking for 'click' on calc-button */
const keys = document.querySelector('.bottom');

keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains('is-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }
  if (target.classList.contains('rev-button')) {
    const input1 = document.getElementById('rev-input');
    reverse(input1.value);
    updateDisplay();
  }
  if (target.classList.contains('pal-button')) {
    updateDisplay();
    const input1 = document.getElementById('rev-input');
    palindrome(input1.value);
    updateDisplay();
  }
  if (target.classList.contains('len-button')) {
    updateDisplay();
    const input1 = document.getElementById('rev-input');
    len(input1.value);
    updateDisplay();
  }
  if (target.classList.contains('cv-button')) {
    updateDisplay();
    const input1 = document.getElementById('rev-input');
    countVowels(input1.value);
    updateDisplay();
  }
  if (target.classList.contains('rmv-button')) {
    updateDisplay();
    const input1 = document.getElementById('rev-input');
    removeVowels(input1.value);
    updateDisplay();
  }
  if (target.classList.contains('bub-button')) {
    updateDisplay();
    const input1 = document.getElementById('rev-input');
    bubbleSort(input1.value);
    updateDisplay();
  }
  inputDigit(target.value);
  updateDisplay();
});

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if(waitingForSecondOperand == true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  if(operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }
  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand,inputValue,operator);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }
   calculator.waitingForSecondOperand = true;
   calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === 'x') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}

function reverse(string) {
var i;
var str = "";

  for(i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  calculator.displayValue = str;
}

function palindrome(input) {
  var beg = 0;
  var end = input.length - 1;
  var mid = (beg + end) / 2;

  for(i = 0; i <= mid; i++) {
    if (input[beg] == input[end]) {
       beg ++;
       end --;
        if (beg == end) {
          calculator.displayValue = "TRUE"
        }
     }else{
      calculator.displayValue = "FALSE"
    }
  }
}

function len(input) {
  var i = 0;
  var count = 0;
  for(i = 0; i < input.length; i++) {
    count += 1;
  }
  calculator.displayValue = count;
}

function countVowels(input) {
  var i = 0;
  var count = 0;

  for(i = 0; i <= input.length -1; i++) {
    if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") {
      count += 1;
    }else {
      count += 0;
    }
  }
  calculator.displayValue = count;
}

function removeVowels(input) {
  var i = 0;
  var count = 0;
  var str = "";
  for(i = 0; i <= input.length -1; i++) {
    if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") {
      continue;
    }else {
      str += input[i];
    }
  }
  calculator.displayValue = str;
}

function bubbleSort(input) {
  var i,j,k,l;
  var x = [];
  var y = "";
  str = "";

  for(i = 0; i <= input.length -1; i++) {
    if (input[i] != ",") {
      str += input[i];
    }
  }

  for(j = 0; j <= str.length -1; j++) {
    x[j] = str[j];
  }

  for(k = 0; k <= str.length-1; k++) {
    for(l = 0; l <= str.length -1; l++) {
      if(x[l] > x[l + 1]) {
         y = x[l + 1];
        x[l+1] = x[l];
        x[l] = y;
      }
    }
  }
  calculator.displayValue = x;
}

/*
function insertionSort(input) {

}


function selectionSort(input) {

}

function mergeSort(input) {

}

funciton heapSort(input) {

}

function quickSort() {

}

*/

function resetCalculator() {
  calculator.displayValue = ' ';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function chooseMethod() {
  const method = this.value;
  if(method == "Integers") {
    resetCalculator();
    updateDisplay();
      const butt = '<button class = "is-clear" value = "clear">C</button><button class = "operator" value = "/" >/</button><button class = "calc-button" value = "7">7</button><button class = "calc-button" value = "8">8</button><button class = "calc-button" value = "9">9</button><button class = "operator" value = "x">x</button><button class = "calc-button" value = "4">4</button><button class = "calc-button" value = "5">5</button><button class = "calc-button" value = "6">6</button><button class = "operator" value = "-">-</button><button class = "calc-button" value = "1">1</button><button class = "calc-button" value = "2">2</button><button class = "calc-button" value = "3">3</button><button class = "operator" value = "+">&plus;</button><button class = "is-zero" value = "0">0</button><button class = "operator" value = "=" id = "is-equals">&equals;</button></div>'
      const str = document.querySelector('.bottom');
      str.innerHTML = butt;
  } else if (method == "Strings") {
      resetCalculator();
      updateDisplay();
      const butt = '<input type = "input" class = "is-input" placeholder = "Enter String" id = "rev-input" value = ""></input><button class = "rev-button">Reverse</button></div><button class = "pal-button" >Palindrome</button><button class = "len-button" >Length</button><button class = "cv-button" >Count Vowels</button><button class = "rmv-button">Remove Vowels</button></div>'
      const str = document.querySelector('.bottom');
      str.innerHTML = butt;
  } else if (method == "A&A") {
    resetCalculator();
    updateDisplay();
    const butt = '<input type = "input" class = "is-input" placeholder = "#,#,#,#" id = "rev-input" value = ""></input><button class = "bub-button">Bubble Sort</button></div><button class = "ins-button" >Insertion Sort</button><button class = "sel-button" >Selection Sort</button><button class = "mer-button" >Merge Sort</button><button class = "qui-button">Quick Sort</button><button class = "hea-button">Heap Sort</button></div>'
    const str = document.querySelector('.bottom');
    str.innerHTML = butt;
  } else {
    /* Figure out what to do here */
   }
}

document.addEventListener("DOMContentLoaded",init());

function init() {
  const stru = document.getElementById("structure");
  stru.addEventListener('change',chooseMethod,false);

}
