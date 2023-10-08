const display = document.getElementById("display");
console.log(display);
const btns = document.querySelectorAll("button");
const firstNum = document.getElementById("firstNum");
const symbol = document.getElementById("operator");
const secondNum = document.getElementById("secondNum");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.value);
        print(btn);
    })
})

function print(btn) {
    return display.innerText = btn.value;
}

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