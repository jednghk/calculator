const keypad = document.querySelector('#calculator-keypad')
const display = document.querySelector('input')
let firstOperand = '';
let secondOperand = '';
let inputOperator = '';

function updateValue(number) {
    if (!display.value && number.textContent == '0') { //prevents user from keying in 0 as first num
        return
    }
    
    if (firstOperand && !secondOperand) {
        display.value = number.textContent
        secondOperand = display.value
    } else {
        display.value += number.textContent
    }
} 

function process(operator) {
    if (!inputOperator) { //account for first operator press
        if (operator.textContent === '=' ) { //returns if equals is pressed multiple times
            return
        }
        inputOperator = operator.textContent
    }

    if (operator.textContent === '=') {
        if (!secondOperand) {
            return
        } else {
            secondOperand = display.value
            display.value = calculate(inputOperator, firstOperand, secondOperand)
            firstOperand = display.value
            secondOperand = ''
            inputOperator = ''
        }
    } else {
        if (!firstOperand) {
            firstOperand = display.value
        } else if (!secondOperand){
            inputOperator = operator.textContent //allows user to change operator if users presses wrong one
        } else if (firstOperand && secondOperand) {
            secondOperand = display.value
            display.value = calculate(inputOperator, firstOperand, secondOperand)
            firstOperand = display.value
            secondOperand = ''
            inputOperator = operator.textContent
        }
    }
}

function allClear(button) {
    display.value = ''
    firstOperand = ''
    secondOperand = ''
    inputOperator = ''
}

function del(button) {
    display.value = display.value.slice(0, display.value.length - 1)
}

function calculate(operator, num1, num2) {
/*     if (parseFloat(num1) < 0) {
        num1 = `-${num1}`
    }
    if (parseFloat(num2) < 0) {
        num2 = `-${num2}`
    } */
    
    let result;
    if (operator === '+') {
        result = parseFloat(num1) + parseFloat(num2)
    } else if (operator === '-') {
        result = parseFloat(num1) - parseFloat(num2)
    } else if (operator === '*') {
        result = parseFloat(num1) * parseFloat(num2)
    } else if (operator === '/') {
        result = parseFloat(num1)/parseFloat(num2)
    }
    return result
}
