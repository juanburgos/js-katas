/* Example of using higher order functions */

function add (num1, num2) {
    return num1 + num2;
}

function substract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function calculate (num1, num2, operator) {
  return operator(num1, num2);
}

calculate(5, 6, add); // result = 11
