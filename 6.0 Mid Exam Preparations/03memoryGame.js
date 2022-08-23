function memoryGame(userInput) {
    let nums = userInput.shift().split(' ');
    let i = 0; let command = userInput[i];
    while (command !== 'end') {
        command = command.split(' ');
        if ((command !== 'end') && (nums.length == 0)) {
            console.log(`You have won in ${i} turns!`);
            break;
        }
        let index1 = Number(command[0]);
        let index2 = Number(command[1]); i++;
        if (index1 == index2) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let spliceIndex = (nums.length / 2) //+ 1; 
            nums.splice(spliceIndex, 0, `-${i}a`);
            nums.splice(spliceIndex, 0, `-${i}a`);
            command = userInput[i];
            continue;
        } else if (index1 < 0 || index1 >= nums.length) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let spliceIndex = (nums.length / 2) //+ 1; 
            nums.splice(spliceIndex, 0, `-${i}a`);
            nums.splice(spliceIndex, 0, `-${i}a`);
            command = userInput[i];
            continue;
        } else if (index2 < 0 || index2 >= nums.length) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let spliceIndex = (nums.length / 2) //+ 1; 
            nums.splice(spliceIndex, 0, `-${i}a`);
            nums.splice(spliceIndex, 0, `-${i}a`);
            command = userInput[i];
            continue;
        }
        let num1 = nums[index1], num2 = nums[index2];
        if (num1 !== num2) {
            console.log('Try again!');
            command = userInput[i];
            continue;
        }
        console.log(`Congrats! You have found matching elements - ${nums[index1]}!`);
        index1 = nums.indexOf(num1);
        nums.splice(index1, 1);
        index2 = nums.indexOf(num2);
        nums.splice(index2, 1);
        command = userInput[i];
    }
    if (command === 'end' && nums.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(`${nums.join(' ')}`);
    }
} // 85/100 eee 4upi se nqkude ddz na 1 test
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
);
console.log('------------------------------------');
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);
console.log(`------------------------------------`);
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);