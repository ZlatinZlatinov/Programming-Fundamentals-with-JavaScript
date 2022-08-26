function phoneBook(input) {
    let newObject = {};
    for (let line of input) {
        let [name, phoneNumber] = line.split(' ');
        newObject[name] = phoneNumber;
    }
    for (let [name, num] of Object.entries(newObject)) {
        console.log(`${name} -> ${num}`);
    }
} // 100/100
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);