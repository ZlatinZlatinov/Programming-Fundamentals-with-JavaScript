function partyTime(userInput) {
    let newArr = []; let counter = 0;
    for (let num of userInput) {
        counter++;
        if (num == 'PARTY') {
            break;
        }
        newArr.push(num);
    }
    for (let x = 0; x < counter; x++) {
        let k = userInput.shift();
    }

    for (let person of userInput) {
        let index = newArr.indexOf(person);
        newArr.splice(index, 1);
    }
    let vipArr = [], regularArr = [];
    console.log(newArr.length);

    newArr.forEach(x => {
        if (!Number.isNaN(Number(x[0]))) {
            vipArr.push(x);
        } else {
            regularArr.push(x);
        }
    });
    vipArr.forEach(a => console.log(a));
    regularArr.forEach(a => console.log(a));
} //100/100 toz num xdd
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);
console.log('---------------');
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);