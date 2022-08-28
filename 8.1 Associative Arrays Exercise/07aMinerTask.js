function aMinerTask(userInput) {
    let map = new Map();
    for (let x = 0; x < userInput.length; x++) {
        let ore = userInput[x]; x++;
        let amount = Number(userInput[x]);
        if (map.has(ore) == false) {
            map.set(ore, amount);
        } else {
            let newAmount = map.get(ore) + amount;
            map.set(ore, newAmount);
        }
    }
    let entries = Array
        .from(map.entries())
        .forEach(([ore, num]) => console.log(`${ore} -> ${num}`));
} // 100/100 ezz
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);