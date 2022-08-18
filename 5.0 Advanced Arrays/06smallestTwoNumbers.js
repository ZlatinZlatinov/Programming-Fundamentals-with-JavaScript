function smallestTwoNumbers(arrayOfNumbers) {
    let a = arrayOfNumbers.sort((a, b) => a - b);
    let b = a.slice(0, 2);
    let c = b.join(' ');
    console.log(c);
}
//smallestTwoNumbers([30, 15, 50, 5]); 100/100

// Senior dev : 

function smallestTwoNumbers(arrayOfNumbers) {
    console.log((
        arrayOfNumbers
            .sort((a, b) => a - b)
            .slice(0, 2))
            .join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]); 
// 100/100
