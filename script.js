let display = document.getElementById('display');
let currentNumber = '';

function appendToDisplay(value) {
    currentNumber += value;
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    display.value = '';
}

function calculate() {
    try {
        const result = eval(currentNumber);
        display.value = result;
        currentNumber = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentNumber = '';
    }
}
