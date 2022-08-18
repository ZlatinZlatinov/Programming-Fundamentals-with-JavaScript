function arrayManipulations(userInput) {
    let modifiedArray = userInput.shift().split(' ').map(Number);

    for (let i = 0; i < userInput.length; i++) {
        let [command, firstNum, secondNum] = userInput[i].split(' ');
        firstNum = (Number(firstNum)), secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                modifiedArray.push(firstNum);
                break;
            case 'Remove':
                modifiedArray = modifiedArray.filter((x) => x != firstNum);
                break;
            case 'RemoveAt':
                modifiedArray.splice(firstNum, 1);
                break;
            case 'Insert':
                modifiedArray.splice(secondNum, 0, firstNum);
                break;
            default:
                break;
        }
    }
    console.log(modifiedArray.join(' '));
} 
// 100/100 ама нш не разбрах хдд
arrayManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
]);
