const keypad = document.querySelector('#calculator-keypad')
const display = document.querySelector('input')
let firstOperand = '';
let secondOperand = '';
let inputOperator = '';

function updateValue(number) {
    //reflects button pressed onto the display
    let reDot = /[.]/g
    if (display.value.search(reDot) !== -1 && number.textContent === '.') {
        //return if user types multiple decimal points
        return
    }
    
    if (!display.value && number.textContent == '0') {
        //return if keying in 0 as first num
        return
    }
    
    if (inputOperator ==='=') {
        //resets calculator when number is typed after pressing '='
        inputOperator = ''
        firstOperand = ''
        display.value = ''
    }

    if (number.textContent === '+/-') {
        //positive numbers become negative and vice versa
        if (parseFloat(display.value) < 0) {
            display.value = display.value.slice(1, display.value.length)
            return
        } else {
            display.value = `-${display.value}`
        return
        }
    }

    if (firstOperand && !secondOperand) {
        display.value = number.textContent
        secondOperand = display.value
    } else {
        //updates screen when number is typed
        display.value += number.textContent
    }
} 

function process(operator) {
    //two main conditionals 
    if (!inputOperator || inputOperator === '=') {
        //account for first operator press
        if (operator.textContent === '=' ) {
            //returns if equals is pressed multiple times
            return
        }
        inputOperator = operator.textContent
    }

    if (operator.textContent === '=') {
        if (!secondOperand) {
            //return if user does not input second number
            return
        } else {
            //saves secondOperand, evaluates expression, sets answer to firstOperand, clears secondOperand
            //allows user to chain operators 
            secondOperand = display.value
            display.value = calculate(inputOperator, firstOperand, secondOperand)
            firstOperand = display.value
            secondOperand = ''
            inputOperator = '='
        }
    } else {
        if (!firstOperand) {
            //saves firstOperand value
            firstOperand = display.value
        } else if (!secondOperand){
            //allows user to change operator if users presses wrong one
            inputOperator = operator.textContent
        } else if (firstOperand && secondOperand) {
            //same as line 62
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
    let result;
    if (operator === '+') {
        result = parseFloat(num1) + parseFloat(num2)
    } else if (operator === '-') {
        result = parseFloat(num1) - parseFloat(num2)
    } else if (operator === '*') {
        result = parseFloat(num1) * parseFloat(num2)
    } else if (operator === '/') {
        if (parseFloat(num2) === 0) {
            return 
        }
        result = parseFloat(num1)/parseFloat(num2)
    }
    return Math.round((result + Number.EPSILON) * 1000) / 1000 //rounds to 3 decimal places if necessary
}

//this section deals with keyboard support, including operators
function typeNumber(e) {
    //returns if invalid characters are typed. e.g. letter and non-numbers which are not operators
    if (e.keyCode !== 8 && e.keyCode !== 27 && e.keyCode !== 191 && e.keyCode !== 189 && e.keyCode !== 187 && e.keyCode !== 190 && e.keyCode !== 13) {
        if (e.keyCode < 48 || e.keyCode > 57) {
            return
        }
    }
    
    if (e.shiftKey === true) {
        btn = document.querySelector(`button[data-key='s${e.keyCode}']`)
    } else {
        btn = document.querySelector(`button[data-key='${e.keyCode}']`)
    }
    btn.click()
}

document.addEventListener('keydown', typeNumber)