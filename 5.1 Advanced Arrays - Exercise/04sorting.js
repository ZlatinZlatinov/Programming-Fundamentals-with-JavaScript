function sortingMachine(userInput) {
    let result = [];
    while (userInput.length > 0) {
        let biggest = userInput.sort((a, b) => b - a).shift();
        let smallest = userInput.sort((a, b) => a - b).shift();
        result.push(biggest);
        result.push(smallest);
    }
    console.log(result.join(' '));
}
sortingMachine([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); 
// 100/100