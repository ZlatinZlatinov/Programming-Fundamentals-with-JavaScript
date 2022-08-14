function ladyBugds2nd(inputArray) {
    let fieldSize = inputArray.shift();
    let bugPlaces = inputArray.shift().split(' ').map(Number);
    let newArray = [];
    for (let x = 0; x < fieldSize; x++) {
        newArray.push(0);
    }
    bugPlaces.forEach(n => newArray[n] = 1);

    for (let line of inputArray) {
        let [index, direction, length] = line.split(' ');
        index = Number(index), length = Number(length); 
        let newIndex;
        switch (direction) {
            case 'right': 
            newIndex = index + length;
                // if (newIndex < newArray.length && newArray[newIndex] != 1 && newArray[index] != 0) { 
                //     newArray[index] = 0;
                //     newArray[newIndex] = 1;
                // } 
                // if (newIndex >= newArray.length && newArray[index] != 0) {
                //     newArray[index] = 0;
                // } 
                // if (newIndex < newArray.length && newArray[newIndex] == 1 && newArray[index] != 0) { 
                //     if (newIndex + length < newArray.length) { 
                //         newArray[index] = 0;
                //         newArray[newIndex + length] = 1;
                //     } else {
                //         newArray[index] = 0;
                //     }
                // } 
                for (let x = 0; x < newArray.length; x++) { 
                    
                    if (x == index && newArray[x] == 1) { 
                        newArray[x] = 0;
                        if (x + length > newArray.length) {
                            continue;
                        } 
                        
                    }
                }
                
                break;
            case 'left':
                // newIndex = index - length; 
                // if (newIndex > -1 && newArray[newIndex] != 1 && newArray[index] != 0) { 
                //     newArray[index] = 0;
                //     newArray[newIndex] = 1;
                // } 
                // if (newIndex < 0 && newArray[index] != 0) {
                //     newArray[index] = 0;
                // } 
                // if (newIndex > -1 && newArray[newIndex] == 1 && newArray[index] != 0) { 
                //     if (newIndex + length > -1) { 
                //         newArray[index] = 0;
                //         newArray[newIndex + length] = 1;
                //     } else {
                //         newArray[index] = 0;
                //     }
                // } 

                for (let x = newArray.length - 1; x > 0 ; x--) { 
                    
                    if (newArray[index] == 1 && (index - length) > - 1) { 
                        newArray[index] = 0;
                        newArray[index + length] = 1; 
                    }
                }
                break;
        }
    }
    console.log(newArray.join(' '));
}
ladyBugds2nd([3, '0 1',
    '0 right 1',
    '2 right 1']);
console.log('-----');
ladyBugds2nd([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']);
console.log('-----');
ladyBugds2nd([5, '3',
    '3 left 2',
    '1 left -2']);