function searchForNumber(arrayOfNumbers, commands) {
    let elementsToTake = commands[0];
    let elementsToDelete = commands[1];
    let searchedNumber = commands[2];
    let elWork = arrayOfNumbers.slice(0, elementsToTake);

    for (let i = 0; i < elementsToDelete; i++) {
        elWork.shift();
    } 

    let counter = 0; 

    for (let element of elWork) {
        if (element == searchedNumber) {
            counter++;
        }
    } 

    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]); 
// 100/100