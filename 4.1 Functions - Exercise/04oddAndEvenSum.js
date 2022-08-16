function oddAndEvenSum(num) {
    let newString = String(num);
    let oddSum = 0, evenSum = 0;

    for (let element of newString) {
        if (Number(element) % 2 == 0) {
            evenSum += Number(element);
        } else {
            oddSum += Number(element);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435); 
// 100/100 ; moje i s masiv