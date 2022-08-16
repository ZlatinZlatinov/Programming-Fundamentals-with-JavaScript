function smallestOfThreeNumbers(num1, num2, num3) {
    let newArray = [num1, num2, num3];
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < newArray.length; i++) {
        let currentNum = newArray[i];
        if (currentNum <= min) {
            min = currentNum;
        }
    }
    console.log(min);
}
smallestOfThreeNumbers(2, 5, 3);
// 100/100