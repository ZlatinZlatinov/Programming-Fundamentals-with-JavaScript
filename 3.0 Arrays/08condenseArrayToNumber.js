function condenseArrayToNumber(arrayey) {
    let firstSum = '';
    let strings = '';
    for (let x = 0; x < arrayey.length; x++) {
        let currentA = Number(arrayey[x]);
        let currentB = Number(arrayey[x + 1]);
        firstSum += `${currentA + currentB} `;
        if (firstSum != NaN) {
            strings = firstSum;
        }
    }
    console.log(strings);// tva samo kato ideq, dolnoto raboti
}
//condenseArrayToNumber([5, 0, 4, 1, 2]);// need to watch the lecture 

function anotherCondensator(array) {
    let newArray = [];
    for (let x = 0; x < array.length; x++) {
        newArray.push(array[x]);
    }
    while (newArray.length > 1) {
        let randomArray = [];
        for (let y = 0; y < newArray.length - 1; y++) {
            let currentA = Number(newArray[y]);
            let currentB = Number(newArray[y + 1]);
            randomArray.push(currentA + currentB);
        }
        newArray = randomArray;
    }
    console.log(newArray.join());
}
anotherCondensator([5,0,4,1,2]); 
// 100/100 - to i na lekciqta e taka koda , tui de poneje q gledah xdd