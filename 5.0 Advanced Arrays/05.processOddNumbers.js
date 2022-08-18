function processOddNumbers(arrayOfNumbers) {
    let result = arrayOfNumbers.filter((x, i) => i % 2 != 0);
    let print = result.map((x) => x * 2).reverse();
    console.log(print.join(' '));

}
//processOddNumbers([10, 15, 20, 25]); 100/100

// 2nd method :  

function processOddNums(arrayOfNumbers) {
    console.log(
        arrayOfNumbers
            .filter((x, i) => i % 2 != 0)
            .map((x) => x * 2)
            .reverse()
            .join(' '));
}
processOddNums([10, 15, 20, 25]); 
// 100/100 Senior Developer