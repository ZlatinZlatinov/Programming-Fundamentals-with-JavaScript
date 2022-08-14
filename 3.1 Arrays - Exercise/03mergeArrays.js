function mergeArrays(arri, arri2) {
    let arri3 = [];
    for (let i = 0; i < arri.length; i++) {
        let currentA = arri[i];
        let currentB = arri2[i];
        if (i % 2 == 0) {
            arri3.push(Number(currentA) + Number(currentB));
        } else {
            arri3.push(currentA + currentB);
        }
    }
    console.log(arri3.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
); 
// 100/100