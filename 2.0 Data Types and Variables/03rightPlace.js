function rightPlace(stringA, char, stringB) {
    let printLine = '';
    for (let i = 0; i < stringA.length; i++) {
        let currentChar = stringA[i];
        if (currentChar === "_") {
            currentChar = char;
        }
        printLine += `${currentChar}`;
    }

    // if (printLine === stringB){
    //     console.log('Matched');
    // } else{
    //     console.log('Not Matched');
    // } 1st method
    console.log(printLine === stringB ? 'Matched' : 'Not Matched'); // 2nd method s ?
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
// 100/100