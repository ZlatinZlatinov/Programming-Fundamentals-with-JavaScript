function addAndSubtract(num1, num2, num3) {
    let arrow = (firstNum, secondNum) => firstNum + secondNum;
    let result = arrow(num1, num2) - num3;
    console.log(result);
}
addAndSubtract(23, 6, 10); 
// 100/100