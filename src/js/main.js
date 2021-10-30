var display = document.querySelector('.calculator__display');
var numPad = document.querySelector('.calculator__numbers');
var clear = document.querySelector('.calculator__numbers .clear');
var actions = document.querySelector('.calculator__actions');

var cache = [];

function handleNumberClick(event) {
    var target = event.target;

    if (target.classList.contains('number')) {
        var number = target.dataset.value;

        if (number === '0' && !display.value) {
            return;
        }

        display.value = display.value + number;
    }
}

function handleClearClick (event) {
    display.value = '';
    cache = [];
}

function processAction (action) {
    switch (action) {
        case '=': {
            cache.push(+display.value);
            display.value = calculate(cache);
            break;
        }
        default: {
            cache.push(+display.value);
            cache.push(action);
            display.value = '';
            display.focus();
        }
    }
}

function handleActionClick(event) {
    var target = event.target;
    if (target.classList.contains('action')) {
        processAction(target.dataset.value);
    }
}

function sum (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function devide (a , b) {
    return a / b;
}

function customPow (a, b) {
    return Math.pow(a, b);
}

var mathActionsMap = {
    '+': sum,
    '-': sub,
    '*': multiply,
    '/': devide,
    'pow': customPow,
}

function calculate(arr) {
    for(var i = 2; i < arr.length; i += 2) {
        arr[i] = mathActionsMap[arr[i - 1]](arr[i - 2], arr[i]);
    }

    return arr[arr.length - 1];
}

function windowClickHandler (event) {
    var supportedOperatons = ['+', '-', '/', '*', '='];
    if (supportedOperatons.includes(event.key)) {
        processAction(event.key);
    }
}


numPad.addEventListener('click', handleNumberClick);
clear.addEventListener('click', handleClearClick);
actions.addEventListener('click', handleActionClick);
window.addEventListener('keydown', windowClickHandler);
