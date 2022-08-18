function firstAndLAstKNums(arrayOfNumbers) {
    let k = arrayOfNumbers.shift();
    let firstKelements = arrayOfNumbers.slice(0, k);
    let lastKelements = arrayOfNumbers.slice(-k);
    console.log(firstKelements.join(' '));
    console.log(lastKelements.join(' '));
}
firstAndLAstKNums([2, 7, 8, 9]); 
// 100/100