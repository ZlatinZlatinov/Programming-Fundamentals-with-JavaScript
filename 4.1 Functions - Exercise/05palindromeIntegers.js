function palindromeIntegers(array) {
    for (let element of array) {
        let currentElement = String(element);
        let comparingElement = '';
        for (let i = currentElement.length - 1; i >= 0; i--) {
            comparingElement += `${currentElement[i]}`
        }
        if (Number(currentElement) == Number(comparingElement)) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121]); 
// 100/100