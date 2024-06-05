const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equal');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const decimal = document.querySelector('.dot');

let firstValue = '';
let isFirstValue = true;
let secondValue = '';
let resultValue = 0;
let sign = '';



numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        let value = e.target.getAttribute("value");
        if (isFirstValue) {
            if (value === '.' && firstValue.includes('.')) return;
            firstValue += value;
            result.innerHTML = firstValue;
        } else {
            if (value === '.' && secondValue.includes('.')) return;
            secondValue += value;
            result.innerHTML = secondValue;
        }
    });
});

signs.forEach(signElement => {
    signElement.addEventListener('click', (e) => {
        if (secondValue !== '') {
            calculateResult();
        }
        sign = e.target.getAttribute('value');
        isFirstValue = false;
        result.innerHTML = firstValue;
    });
});

equals.addEventListener('click', () => {
    if (secondValue !== '') {
        calculateResult();
        isFirstValue = true; 
    }
});

function calculateResult() {
    if (firstValue !== '' && secondValue !== '') {
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);

        if (sign === '+') {
            resultValue = firstValue + secondValue;
        } else if (sign === '-') {
            resultValue = firstValue - secondValue;
        } else if (sign === 'x') {
            resultValue = firstValue * secondValue;
        } else if (sign === '/') {
            if (secondValue === 0) {
                result.innerHTML = 'Error:';
                resetCalculator();
                return;
            }
            resultValue = firstValue / secondValue;
        }

        result.innerHTML = resultValue;
        firstValue = resultValue.toString();
        secondValue = '';
        isFirstValue = false;
    }
}

clear.addEventListener('click', () => {
    result.innerHTML = '0';
    resetCalculator();
});

negative.addEventListener('click', () => {
    if (isFirstValue) {
        firstValue = (parseFloat(firstValue) * -1).toString();
        result.innerHTML = firstValue;
    } else {
        secondValue = (parseFloat(secondValue) * -1).toString();
        result.innerHTML = secondValue;
    }
});

percent.addEventListener('click', () => {
    if (isFirstValue) {
        firstValue = (parseFloat(firstValue) / 100).toString();
        result.innerHTML = firstValue;
    } else {
        secondValue = (parseFloat(secondValue) / 100).toString();
        result.innerHTML = secondValue;
    }
});

function resetCalculator() {
    firstValue = '';
    isFirstValue = true;
    secondValue = '';
    resultValue = 0;
    sign = '';
}




decimal.addEventListener('click', () => {
    if (isFirstValue) {
        if (!firstValue.includes('.')) {
            firstValue += '.';
            result.innerHTML = firstValue;
        }
    } else {
        if (!secondValue.includes('.')) {
            secondValue += '.';
            result.innerHTML = secondValue;
        }
    }
});
