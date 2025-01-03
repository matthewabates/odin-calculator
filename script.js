var memory;
var operator;
var startNewNumber = true;
const display = document.querySelector("#display");

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
        if (button.classList.contains('operand')) {
            let number = event.target.id
            if (startNewNumber) {
                console.log('new number started')
                display.value = undefined
                startNewNumber = false
            }
            display.value += number
        } else if (button.classList.contains('operator')) {
            //if we have't calculated the previous operation yet, do that first!
            if (operator != undefined && display.value != undefined && memory != undefined) {
                calculate()
            } 
            operator = event.target.id
            memory = display.value
            startNewNumber = true; 
        } else if (button.id === 'clear') {
            display.value = "undefined"
            memory = undefined 
            operator = undefined
        } else if (button.id === 'equal') {
            if (operator) { calculate() }
        } else if (button.id === 'negate') {
            display.value = -display.value
        } else if (button.id === 'percent') {
            display.value = display.value / 100
        } else if (button.id === 'backspace') {
            display.value = Math.floor(display.value / 10)
        }
    })
})

function calculate() {
    memory = operate(memory, operator, display.value)
    operator = undefined
    display.value = memory
    startNewNumber = true;
}
 
function operate(x, operator, y) {
    console.log (x, operator, y)
    x = Number(x)
    y = Number(y)
    switch (operator) {
        case "+": return x + y
        case "-": return x - y
        case "*": return x * y
        case "/": return x / y
    }
}
