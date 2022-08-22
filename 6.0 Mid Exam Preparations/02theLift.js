function theLift(inputArray) {
    let waitingCount = Number(inputArray[0]);
    let freeSpaces = inputArray[1].split(' ');
    freeSpaces = freeSpaces.map(Number);
    let newArray = [];
    let totalSpaces = freeSpaces.length * 4;
    let leftspaces = totalSpaces - freeSpaces;
    for (let i = 0; i < waitingCount; i++) {
        newArray.push(1);
    }
    let i = 0; let element = freeSpaces[i];
    let print = [];
    while (waitingCount > 0) {
        if (waitingCount <= 0) {
            break;
        }
        let num = newArray.shift();

        element += num;
        print[i] = element
        if (element == 4) {
            i++;
            element = freeSpaces[i];
        }
        waitingCount--;
        totalSpaces--;

    }
    console.log(print);
} // tva daje ne ba4ka i na 50% sig xdd
//theLift(["20", "0 0 0"]); 
// dobavq se 1 sum ++ , iz4islqva se to4no kolko sa svobodnite mesta v na4aloto 
// i ako sum = svobodnite mesta break; 

function theLiftV2(userInput) {
    let queue = Number(userInput.shift().split(' '));
    let cabins = userInput.shift().split(' ');
    cabins = cabins.map(Number);
    let totalSpaces = cabins.length * 4; let freeSpaces = 0;
    for (let element of cabins) {
        freeSpaces += Number(element);
    }

    freeSpaces = totalSpaces - freeSpaces;
    if (freeSpaces > queue) {
        console.log('The lift has empty spots!');
    }
    if (freeSpaces < queue) {
        let sum = queue - freeSpaces;
        console.log(`There isn't enough space! ${sum} people in a queue!`);
    }

    let i = 0; 
    while (queue > 0) {
        queue--;
        freeSpaces--;
        if (freeSpaces < 0) {
            break;
        }
        let element = 1;
        if ((cabins[i]) === 4) {
            i++;
            if ((cabins[i]) === 4) {
                i++;
                if ((cabins[i]) === 4) {
                    i++;
                }
            }
        }
        cabins[i] += element
    }
    console.log(cabins.join(' '));
} // emm 90/100 not bad xdd // malko go hardkodnah xdd
theLiftV2(["15", "0 0 0 0 0"]);
theLiftV2(['20', '0 2 0']);
theLiftV2(['25', '0 4 3 1 1 0']);