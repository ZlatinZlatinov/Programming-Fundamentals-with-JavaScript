function arrayManipulator(arrayOfNums, commandS) {
    let index = 0;
    let commandR = '';
    let printContains;
    while (index < commandS.length) {
        commandR = commandS[index];
        commandR = commandR.split(' ');

        let action = commandR[0];
        if (action === 'print') {
            break;
        }
        if (action === 'sumPairs') {
            let newArray = [];
            for (let i = 0; i < arrayOfNums.length; i++) {
                first = arrayOfNums[i];
                i++;
                let second = arrayOfNums[i];
                let sum = first + second;

                newArray.push(sum);
            }
            arrayOfNums = newArray;
        }
        if (action === 'add') {
            let index1 = Number(commandR[1]);
            let element = Number(commandR[2]);
            arrayOfNums.splice(index1, 0, element);
        }
        if (action === 'addMany') {
            let index2 = Number(commandR[1]);
            for (let i = 2; i < commandR.length; i++) {
                let element = Number(commandR[i]);
                arrayOfNums.splice(index2, 0, element);
                index2++;
            }
        }

        if (commandR.length == 2) {
            let element = Number(commandR[1]);
            let index3 = arrayOfNums.indexOf(element);
            switch (action) {
                case 'contains':
                    printContains = arrayOfNums.includes(element);
                    console.log(printContains ? index3 : -1);
                    break;
                case 'remove':
                    arrayOfNums.splice(element, 1);
                    break;
                case 'shift':
                    for (let i = 0; i < element; i++) {
                        let pusher = arrayOfNums.shift();
                        arrayOfNums.push(pusher);
                    }
                    break;
                default:
                    break;
            }
        }
        index++;
    }
    console.log(`[ ${arrayOfNums.join(', ')} ]`);
}
// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     );  
// console.log('--------------------');
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
//); // emm do tuka 63/100 not bad at all ... utre 4e q napravim sus switch mdaa..

function test(arrayOfNums) {
    let newArray = [7, 8, 9, 5];
    // for (let i = 0; i < arrayOfNums.length; i++) {
    //     let first = arrayOfNums[i];
    //     i++;
    //     let second = arrayOfNums[i];
    //     let sum = first + second;

    //     newArray.push(sum);
    // }
    // arrayOfNums = newArray; 
    newArray.join(' ');
    console.log('testt', arrayOfNums.splice(2, 0, newArray));
}
//test([1, 2, 4, 5, 6, 7]); 


function arrayManipulatorExpert(arrayOfNums, listOfCommands) {

    for (let element of listOfCommands) {
        element = element.split(' ');
        let command = element[0]; let index = 0;
        if(Number(element[1]) >= 0){
            index = Number(element[1]);
        }
        
        let breaker = false;
        switch (command) {
            case 'add':
                let num = Number(element[2]);
                arrayOfNums.splice(index, 0, num);
                break;
            case 'addMany': //??
                for (let i = 2; i < element.length; i++) {
                    arrayOfNums.splice(index, 0, Number(element[i]));
                    index++;
                }
                break;
            case 'contains':
                let ifContains = arrayOfNums.includes(index);
                let ind = arrayOfNums.indexOf(index);
                console.log(ifContains ? ind : -1);
                break;
            case 'remove':
                arrayOfNums.splice(index, 1);
                break;
            case 'shift':
                for (let i = 0; i < index; i++) {
                    let pusher = arrayOfNums.shift();
                    arrayOfNums.push(pusher);
                }
                break;
            case 'sumPairs':
                let newArray1 = []; 
                if(arrayOfNums.length % 2 !== 0){
                    arrayOfNums.push(0);
                }
                for (let i = 0; i < arrayOfNums.length; i++) {
                    let first = Number(arrayOfNums[i]);
                    i++;
                    let second = Number(arrayOfNums[i]);  
                    let sum = first + second;
                    newArray1.push(sum);
                }
                arrayOfNums = newArray1;
                break;
            case 'print':
                breaker = true;
                break;
            default: break;
        }
        if (breaker) {
            break;
        }
    }
    console.log(`[ ${arrayOfNums.map(Number).join(', ')} ]`);
} // emm tolkoz 63/100 
// ae nqam tolkoz e lek 100/100
arrayManipulatorExpert([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);  
arrayManipulatorExpert([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);
arrayManipulatorExpert([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]); 
arrayManipulatorExpert([1, 2, 4, 5, 6, 7, 8], ["sumPairs"]);

