function storage(userInput) {
    let newObj = {};
    for (let line of userInput) {
        let [product, count] = line.split(' ');
        if (newObj.hasOwnProperty(product)) {
            newObj[product] += Number(count);
        } else {
            newObj[product] = Number(count);
        }
    }

    for (let line of Object.entries(newObj)) {
        let [prduct, count] = line;
        console.log(prduct, '->', count);
    }
} // 100/100 ; no lets try with map() lmao
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
console.log('-----------');
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);
console.log('-----------');

function storageRemapped(userInput) {
    let newMap = new Map();
    for (let line of userInput) {
        let [product, count] = line.split(' ');
        if (!newMap.has(product)) {
            newMap.set(product, Number(count));
        } else {
            let newCount = Number(newMap.get(product)) + Number(count);
            newMap.set(product, newCount);
        }
    }
    let newArr = Array.from(newMap.entries());
    newArr.forEach(map => console.log(map[0], '->', map[1]));
} // moje i sus map
storageRemapped(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
console.log('-----------');
storageRemapped(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);

