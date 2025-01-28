const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.getElementById('clear');
 
function updateDisplay(value) {
    display.value += value;
}
 
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
 
function clearDisplay() {
    display.value = '';
}
 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === '=') {
            calculate();
        } else {
            updateDisplay(value);
        }
    });
});
 
clearButton.addEventListener('click', clearDisplay);
