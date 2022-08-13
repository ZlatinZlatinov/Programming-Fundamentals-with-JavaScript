function evenAndOddSubstraction(arrayey) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arrayey.length; i++) {
        let currentNum = Number(arrayey[i]);
        if (currentNum % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubstraction(['1', '2', '3', '4', '5', '6']);