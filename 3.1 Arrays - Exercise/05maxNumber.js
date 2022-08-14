function maxNumber(array) {
    let newArray = [];
    for (let x = 0; x < array.length; x++) {
        newArray.push(array[x]);
    }

    let index = 0;
    let masiv = [];

    while (index < newArray.length) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let y = index; y < newArray.length; y++) {
            let output = Number(newArray[y]);
            if (output >= max) {
                max = output;
                index = y;
            }

        }
        index++;
        masiv.push(max);
    }
    console.log(masiv.join(" "));

}
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]); 
maxNumber([27, 19, 42, 2, 13, 45, 48])// emm pone tez gi izkarva vqrno xdd 
// 100 ot 100 we