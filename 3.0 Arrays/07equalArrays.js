function equalArrays(a, b) {
    let check; let sum = 0;
    let position = 0;
    for (let x = 0; x < a.length; x++) {
        let currentA = Number(a[x]);
        let currentB = Number(b[x]);
        if (currentA == currentB) {
            check = true;
            sum += currentA;
        } else {
            check = false;
            position = x;
            break;
        }
    }
    if (check) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${position} index`);
    }
}
equalArrays(['1', '2', '3', '4', '5', '6'], ['1', '2', '8', '4', '5', '6']); 
// 100/100