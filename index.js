// create functions for all basic math operators. (+-*/)
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

// create 3 variables for each part of equation (number operator number).
const firstNum = document.querySelector('#firstNum');
const operator = document.querySelector('#operator');
const secondNum = document.querySelector('#secondNum');

// create an operator function that takes these variables and uses one of the previous functions to solve the equation.
function operator(firstNum, symbol, secondNum) {
    if (symbol === '+') {
        return add(firstNum, secondNum);
    } else if (symbol === '-') {
        return subtract(firstNum, secondNum);
    } else if (symbol === 'x') {
        return multiply(firstNum, secondNum);
    } else if (symbol === '/') {
        return divide(firstNum, secondNum);
    } else {
        return 'Uh oh, try again';
    }
}