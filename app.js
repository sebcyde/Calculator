// Linking buttons to values

const zero = document.getElementById('0')
const decimal = document.getElementById('decimal')
const equals = document.getElementById('equals')

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const add = document.getElementById('add')

const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const minus = document.getElementById('minus')

const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const multiply = document.getElementById('multiply')

const clear = document.getElementById('clear')
const divide = document.getElementById('divide')

const display = document.querySelector('.col-12')
let screen = document.querySelector('#screen')
let disp = document.createElement('P');


// Making each button press append value to display

one.addEventListener('click',
    getTextContent => {

        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(one.innerText);
        } else {
            (screen).append(one.innerText);

        }

    })


two.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(two.innerText);
        } else {
            (screen).append(two.innerText);

        }

    })

three.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(three.innerText);
        } else {
            (screen).append(three.innerText);

        }

    })

four.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(four.innerText);
        } else {
            (screen).append(four.innerText);

        }

    })

five.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(five.innerText);
        } else {
            (screen).append(five.innerText);

        }

    })

six.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(six.innerText);
        } else {
            (screen).append(six.innerText);

        }

    })

seven.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(seven.innerText);
        } else {
            (screen).append(seven.innerText);

        }

    })

eight.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(eight.innerText);
        } else {
            (screen).append(eight.innerText);

        }

    })

nine.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {
            screen.innerText = '';
            (screen).append(nine.innerText);
        } else {
            (screen).append(nine.innerText);
        }

    })

zero.addEventListener('click',
    getTextContent => {
        if (screen.innerText === ('0')) {

            screen.innerText = '';
            (screen).append(zero.innerText);

        } else {
            (screen).append(zero.innerText);
        }

    })

decimal.addEventListener('click',
    getTextContent => {
        if (screen.innerText.includes('.')) {
            alert('Input cannot contain two decimal places');
        } else {
            (screen).append(decimal.innerText);
        }
    })


clear.addEventListener('click',
    getTextContent => {
        screen.innerText = '';
        delete window.input1;
        delete window.input2;
        console.log('Display cleared');
        (screen).append(zero.innerText);
    })


divide.addEventListener('click', () => {
    let input1 = Number(screen.innerText);
    screen.innerText = '';
    console.log('First Number is ' + input1);
    console.log('Divide');
    (screen).append(zero.innerText);
    equals.addEventListener('click', () => {
        let input2 = Number(screen.innerText);
        screen.innerText = '';
        console.log('Second Number is ' + input2);
        let result = input1 / input2;
        (screen).append(result);
        console.log(result);
    })
})

multiply.addEventListener('click', () => {
    let input1 = Number(screen.innerText);
    screen.innerText = '';
    console.log('First Number is ' + input1);
    console.log('Multiply');
    (screen).append(zero.innerText);
    equals.addEventListener('click', () => {
        let input2 = Number(screen.innerText);
        screen.innerText = '';
        console.log('Second Number is ' + input2);
        let result = input1 * input2;
        (screen).append(result);
        console.log(result);
    })
})

minus.addEventListener('click', () => {
    let input1 = Number(screen.innerText);
    screen.innerText = '';
    console.log('First Number is ' + input1);
    console.log('Minus');
    (screen).append(zero.innerText);
    equals.addEventListener('click', () => {
        let input2 = Number(screen.innerText);
        screen.innerText = '';
        console.log('Second Number is ' + input2);
        let result = input1 - input2;
        (screen).append(result);
        console.log(result);
    })
})

add.addEventListener('click', () => {
    let input1 = Number(screen.innerText);
    screen.innerText = '';
    console.log('First Number is ' + input1);
    console.log('Add');
    (screen).append(zero.innerText);
    equals.addEventListener('click', () => {
        let input2 = Number(screen.innerText);
        screen.innerText = '';
        console.log('Second Number is ' + input2);
        let result = input1 + input2;
        (screen).append(result);
        console.log(result);
    });
})

