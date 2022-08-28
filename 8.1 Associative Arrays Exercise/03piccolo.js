function piccolo(userInput) {
    let newMap = new Map();
    for (let car of userInput) {
        let [action, number] = car.split(', ');
        let counter = 1;
        newMap.set(number, counter);
        if (action == 'OUT') {
            newMap.delete(number);
        }
    }
    let entries = Array.from(newMap.entries());
    if (entries.length == 0) {
        console.log('Parking Lot is Empty');
        return;
    }
    let keys = Array
        .from(newMap.keys())
        .sort((a, b) => a.localeCompare(b))
        .forEach(k => console.log(k));
} // 100/100
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
console.log('-------------------');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);