function simpleCalculator(numA, numB, operator) {
    let result;
    switch (operator) {
        case 'multiply': result = numA * numB;
            break;
        case 'divide': result = numA / numB;
            break;
        case 'add': result = numA + numB;
            break;
        case 'subtract': result = numA - numB;
            break;
        default:
            break;
    }
    console.log(result);
}
//simpleCalculator(5, 5, "multiply");
// 100/100
// try this with using arrow functions ... ok and without using switch / or if 

// moje i taka: 

function anotherSimpleCalc(num1, num2, operator) {
    let result;
    switch (operator) {
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        default:
            break;
    }
    console.log(result);

    // чрез извикване на готова функция, която вече сме написали

    function multiply(num1, num2) {
        return num1 * num2;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    function add(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
}
//anotherSimpleCalc(2, 23, 'add'); 
// 100/100 

// може и чрез извикване на arrow functions , но трябва да са 
// дефинирани предварително/ най от горе 

function arrowCalc(num1, num2, operator) {
    let multiply = (numA, numB) => numA * numB;
    let divide = (numA, numB) => numA / numB;
    let add = (numA, numB) => numA + numB;
    let subtract = (numA, numB) => numA - numB;
    let result;

    switch (operator) {
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        default:
            break;
    }
    console.log(result);
}
arrowCalc(2, 5, 'multiply');
// 100/100