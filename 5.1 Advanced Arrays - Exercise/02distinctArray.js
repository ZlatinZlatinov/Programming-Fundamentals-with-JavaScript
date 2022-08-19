function distinctArray(userInput) {

    for (let element of userInput) {
        let index = userInput.indexOf(element);

        for (let i = index + 1; i < userInput.length; i++) {
            let comparingElement = userInput[i];
            if (element == comparingElement) {
                userInput.splice(i, 1);
                break;
            }
        }
    }
    console.log(userInput.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]); 
// 100/100