function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generaatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}
document.getElementById('keypad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        calc.value = '';
    } else {

        const previousCalc = calc.value;
        const newCalc = previousCalc + number;
        calc.value = newCalc;
    }

});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedPin) {

        successMessage.style.display = 'block';
        failError.style.display = 'none';
    } else {

        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}