function arrayModifier(userInput) {
    let workingArray = userInput.shift().split(' ').map(Number);

    for (let element of userInput) {
        element = element.split(' ');
        let command = element[0];
        let index1 = Number(element[1]), index2 = Number(element[2]);
        let firstNum = workingArray[index1], secondNum = workingArray[index2];
        let breaker = false;

        switch (command) {
            case 'swap':
                workingArray.splice(index1, 1, secondNum);
                workingArray.splice(index2, 1, firstNum);
                break;
            case 'multiply':
                let sum = firstNum * secondNum;
                workingArray.splice(index1, 1, sum);
                break;
            case 'decrease':
                workingArray = workingArray.map(x => x - 1);
                break;
            case 'end':
                breaker = true;
                break;
            default: break;
        }
        if (breaker) {
            break;
        }
    }
    console.log(workingArray.join(', '));
} // 100 /100 e lek
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
); 

function test (array){
    array = array.split('|'); 
    console.log(array);
} 
test('abc|def|jhi');