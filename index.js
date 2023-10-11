const display = document.getElementById("display");
const btns = document.querySelectorAll("button");
const equal = document.getElementById("equal");
const clearBtn = document.getElementById("clear-btn");
let symbol;
let firstNum;
let secondNum;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        print(btn);
    })
})

clearBtn.addEventListener('click', () => {
    return display.innerText = '';
})

equal.addEventListener('click', () => {
    let arr = display.innerText.split(symbol);
    firstNum = Number(arr[0]);
    secondNum = Number(arr[1]);

    return operator(firstNum, symbol, secondNum);
})

function print(btn) {
    if (btn.classList == 'symbol') {
        if (symbol) {
            let nextSymbol = btn.value;
            console.log(nextSymbol);

            let arr = display.innerText.split(symbol);
            console.log(arr);
            firstNum = Number(arr[0]);
            console.log(firstNum);
            secondNum = Number(arr[1]);
            console.log(secondNum);

            const result = operator(firstNum, symbol, secondNum);
            display.innerText = result;
            symbol = nextSymbol;
        }
        symbol = btn.value;
    }

    display.innerText += btn.value;
}

function add(firstNum, secondNum) {
    const result = firstNum + secondNum;
    return result;
}

function subtract(firstNum, secondNum) {
    const result = firstNum - secondNum;
    return result;
}

function multiply(firstNum, secondNum) {
    const result = firstNum * secondNum;
    return result;
}

function divide(firstNum, secondNum) {
    const result = firstNum / secondNum;
    return result;
}

function operator(firstNum, symbol, secondNum) {
    if (symbol === '+') {
        return display.innerText = add(firstNum, secondNum);
    } else if (symbol === '-') {
        return display.innerText = subtract(firstNum, secondNum);
    } else if (symbol === 'x') {
        return display.innerText = multiply(firstNum, secondNum);
    } else if (symbol === '/') {
        return display.innerText = divide(firstNum, secondNum);
    } else {
        return 'Uh oh, try again';
    }
}