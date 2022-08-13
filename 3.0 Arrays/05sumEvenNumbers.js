function sumEvenNumbers(arryy) {
    let sum = 0;
    for (let i = 0; i < arryy.length; i++) {
        let currentNum = Number(arryy[i]);
        if (currentNum % 2 == 0) {
            sum += currentNum;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']); 
// 100/100