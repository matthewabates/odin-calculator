var x;
var y;
var operator;
const display = document.querySelector("#display");

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', event => {
        display.value += event.target.id
    })
})

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', event => {
        operator = event.target.id
        x = display.value
        display.value = ""
    })
})

document.querySelectorAll('#equal').forEach(button => {
    button.addEventListener('click', event => {
        y = display.value;
        display.value = operate(operator, x, y)
    })
})

document.querySelectorAll('#clear').forEach(button => {
    button.addEventListener('click', event => {
        display.value = undefined
        x = undefined
        y = undefined              
    })
})
 
function operate(operator, x, y) {
    switch (operator) {
        case "+": return add(x, y)
        case "-": return subtract(x, y)
        case "*": return multiply(x, y)
        case "/": return divide(x, y)            
    }
}

function add(x, y) {
	return Number(x) + Number(y)
};

function subtract(x, y) {
	return Number(x) - Number(y)
};

function multiply(x, y) {
    return Number(x) * Number(y)
};

function divide(x, y) {
    return Number(x) / Number(y)
}
