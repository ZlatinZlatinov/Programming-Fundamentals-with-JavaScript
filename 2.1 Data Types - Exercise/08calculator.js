function calculator(firstNum, action, secondNum) {
    let sum = 0;
    switch (action) {
        case '+': sum = firstNum + secondNum;
            break;
        case '-': sum = firstNum - secondNum;
            break;
        case '*': sum = firstNum * secondNum;
            break;
        case '/': sum = firstNum / secondNum;
            break;
        default:
            break;
    }
    console.log(sum.toFixed(2));
}
calculator(5, '+', 10); 
// 100/100