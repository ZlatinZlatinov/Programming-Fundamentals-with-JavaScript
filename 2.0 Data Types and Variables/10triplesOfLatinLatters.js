function justTestung() {
    for (let x = 1; x <= 3; x++) {
        for (let y = 1; y <= 3; y++) {
            for (let z = 1; z <= 3; z++) {
                console.log(`${x} ${y} ${z}`);
            }
        }
    }
}
//justTestung(); //just testing nested loops 


function triplesOfLatinLetters(num) {
    let letter = String.fromCharCode(5);
    num = Number(num);
    for (let x = 97; x < 97 + num; x++) {
        for (let y = 97; y < 97 + num; y++) {
            for (let z = 97; z < 97 + num; z++) {
                console.log(`${letter = String.fromCharCode(x)}${letter = String.fromCharCode(y)}${letter = String.fromCharCode(z)}`);
            }
        }
    }
}
triplesOfLatinLetters(3); 
// 100/100