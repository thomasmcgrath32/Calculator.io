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
    const str = " ";

    updateDisplay();
    reverse(input1.value);
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
  var i,j;
  var str = "";
  for(i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  calculator.displayValue = str;
}





function resetCalculator() {
  calculator.displayValue = ' ';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}





function chooseMethod() {
  const method = this.value;

  if(method == "Arithmetic") {
    const butt = '<button class = "is-clear" value = "clear">C</button><button class = "operator" value = "/" >/</button><button class = "calc-button" value = "7">7</button><button class = "calc-button" value = "8">8</button><button class = "calc-button" value = "9">9</button><button class = "operator" value = "x">x</button><button class = "calc-button" value = "4">4</button><button class = "calc-button" value = "5">5</button><button class = "calc-button" value = "6">6</button><button class = "operator" value = "-">-</button><button class = "calc-button" value = "1">1</button><button class = "calc-button" value = "2">2</button><button class = "calc-button" value = "3">3</button><button class = "operator" value = "+">&plus;</button><button class = "is-zero" value = "0">0</button><button class = "operator" value = "=" id = "is-equals">&equals;</button></div>'
    const str = document.querySelector('.bottom')
    str.innerHTML = butt;

  } else if (method == "Strings") {

    const butt = '<input type = "input" class = "is-input" placeholder = "Enter String" id = "rev-input" value = ""></input><button class = "rev-button">Reverse</button></div><input type = "input" class = "is-input" placeholder = "Enter String"></input><button class = "str-button" value = "Palindrome">Palindrome</button><input type = "input" class = "is-input" placeholder = "Enter String"></input><button class = "str-button" value = "length">Length</button><input type = "input" class = "is-input " placeholder = "Enter String"></input><button class = "str-button" value = "upperCase">upperCase</button><input type = "input" class = "is-input " placeholder = "Enter String"></input><button class = "str-button" value = "lowerCase">lowerCase</button></div>'
    const str = document.querySelector('.bottom')
    str.innerHTML = butt;
  } else if (method == "Sorting") {
    sorting(method);
  } else {

   }
}




document.addEventListener("DOMContentLoaded",init());

function init() {
  const stru = document.getElementById("structure");
  stru.addEventListener('change',chooseMethod,false);

}
