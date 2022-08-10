function triangleOfNumbers(num) {
    for( let x = 1; x <= num; x++){ 
        let printLine = ''
        for ( let y = 1; y <= x; y++){
            printLine += `${x} `; 
        } 
        console.log(printLine);
    }
} // ако сложим в ${} вместо х , у ще излезе друга пирамида
triangleOfNumbers(5); 
// 100 / 100