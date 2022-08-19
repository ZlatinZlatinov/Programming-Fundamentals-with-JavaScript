function houseParty(userInput) {
    let listOfPeople = [];

    for (let element of userInput) {
        let command = element.split(' ');
        let name = command[0];

        if (command.length === 3) {
            let isIncluded = listOfPeople.includes(name);
            if (isIncluded) {
                console.log(`${name} is already in the list!`);
            } else {
                listOfPeople.push(name);
            }
        } else {
            let indexOfPerson = listOfPeople.indexOf(name);
            if (indexOfPerson != -1) {
                listOfPeople.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(listOfPeople.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
); 
// 100/100