function bombNumbers(arr1, arr2) {
    let specialNumber = arr2[0];
    let detonations = arr2[1];
    let sum = 0; 

    for (let element of arr1) {
        if (element === specialNumber) {
            let index = arr1.indexOf(specialNumber);
            let start = Math.max(0, index - detonations)
            let end = detonations * 2 + 1;
            arr1.splice(start, end);
        }
    }

    for (let el of arr1) {
        sum += el;
    } 

    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); 
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]); 
// na tva dava 80/100

function test(masiv, hoi) {
    let bombNumber = hoi[0]; 
    let bombRadius = hoi[1]; 
    let indexOfBomb = masiv.indexOf(bombNumber); 

    while (indexOfBomb !== -1) {
        let start = Math.max(0, indexOfBomb - bombRadius); 
        let end = bombRadius * 2 + 1; 
        masiv.splice(start, end); 
        indexOfBomb = masiv.indexOf(bombNumber);
    } 
    let sum = 0; 
    for (let element of masiv){
        sum += element;
    } 
    console.log(sum);
}
//test([1, 2, 3, 4, 5, 6]) 
