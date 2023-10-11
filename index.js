const display = document.getElementById("display");
const btns = document.querySelectorAll("button");
const equal = document.getElementById("equal");
let symbol;
let firstNum;
let secondNum;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        print(btn);
    })
})

equal.addEventListener('click', () => {
    let arr = display.innerText.split(symbol);
    firstNum = Number(arr[0]);
    secondNum = Number(arr[1]);

    operator(firstNum, symbol, secondNum);
})

function print(btn) {
    display.innerText += btn.value;

    if (btn.classList == 'symbol') {
        symbol = btn.value;
    }
}

function add(firstNum, secondNum) {
    const result = firstNum + secondNum;
    console.log(result);
    return result;
}

function subtract(firstNum, secondNum) {
    const result = firstNum - secondNum;
    console.log(result);
    return result;
}

function multiply(firstNum, secondNum) {
    const result = firstNum * secondNum;
    console.log(result);
    return result;
}

function divide(firstNum, secondNum) {
    const result = firstNum / secondNum;
    console.log(result);
    return result;
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