function lettersChangeNumbers(randomInput) {
    let upperCase = [], lowerCase = [];
    let result = 0;
    upperCase.unshift(0); lowerCase.unshift(0);
    for (let x = 65; x <= 90; x++) {
        upperCase.push(String.fromCharCode(x));
    }
    for (let x = 97; x <= 122; x++) {
        lowerCase.push(String.fromCharCode(x));
    }
    randomInput = randomInput.split(' ');
    for (let element of randomInput) {
        if (element.length < 3) {
            continue;
        }
        let startIdex = 1; let startLetter = element[0]; 
        let endIndex = element.length - 1; let endLetter = element[element.length - 1];
        let num = Number(element.substring(startIdex, endIndex));
        if (upperCase.includes(startLetter)) {
            let divideNum = upperCase.indexOf(startLetter);
            result += num / divideNum;
        } else {
            let multiplyNum = lowerCase.indexOf(startLetter);
            result += num * multiplyNum;
        }
        if (upperCase.includes(endLetter)) {
            let subtractNum = upperCase.indexOf(endLetter);
            result -= subtractNum;
        } else {
            let addNum = lowerCase.indexOf(endLetter);
            result += addNum;
        }
    }
    console.log(result.toFixed(2));
} // 100/100 утре ше проам ако може да се съкрати кода
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');