function leftRightSum(array) {
    let founIndex = 'no';

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0, rightSum = 0;
        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }

        for (let r = i + 1; r < array.length; r++) {
            rightSum += array[r];
        }

        if (leftSum === rightSum) {
            founIndex = i;
        }
    }
    console.log(founIndex);
}
leftRightSum([1, 2, 3, 3]); // 100/100 ma i tuka gledah lekciqta