function amazingNumbers(num) {
    let numString = String(num);
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    let res = String(sum);
    let breaker = false;
    for (let x = 0; x < res.length; x++) {
        let currentChar = Number(res[x]);
        if (currentChar == 9) {
            console.log(`${num} Amazing? True`);
            breaker = false;
            break;
        } else {
            breaker = true;
        }
    }
    if (breaker) {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(7778); // 100/100 

// Scond method using includes()  : 

function solve(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ?
        `${num} Amazing? True` :
        `${num} Amazing? False`);
}
//solve(1233); // This also works:)