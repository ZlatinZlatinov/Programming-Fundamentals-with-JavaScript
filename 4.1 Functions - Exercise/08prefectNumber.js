function prefectNumber(num) {
    let newArray = [];
    for (let x = 0; x < num; x++) {
        if (num % x == 0) {
            newArray.push(x);
        }
    }
    let sum = 0;
    for (let element of newArray) {
        sum += element;
    }
    console.log(sum == num ? 'We have a perfect number!' : "It's not so perfect.");
}
prefectNumber(1236498); 
// 100/100