function factorialDivision(num1, num2) {
    let sum1 = 1, sum2 = 1, result = 0;
    for (let i = num1; i > 0; i--) {
        sum1 *= i;
    }
    for (let j = num2; j > 0; j--) {
        sum2 *= j;
    }
    result = sum1 / sum2;
    console.log(result.toFixed(2));
}
factorialDivision(5, 2); 
// 100/100