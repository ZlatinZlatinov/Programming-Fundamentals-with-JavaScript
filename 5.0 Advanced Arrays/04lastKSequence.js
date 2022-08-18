function lastKSequence(n, k) {
    let newArray = [1];
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        let masivSum = newArray.slice(-k);
        let sum = 0;
        for (let el of masivSum) {
            sum += el;
        }
        newArray.push(sum);
    }
    console.log(newArray.join(' '));
}
lastKSequence(6, 3); 
lastKSequence(8, 2);