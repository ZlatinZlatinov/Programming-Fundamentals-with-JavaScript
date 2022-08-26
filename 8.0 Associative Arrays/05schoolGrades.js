function schoolGrades(userInput) {
    let map = new Map();
    for (let line of userInput) {
        line = line.split(' ');
        let name = line.shift();
        let grades = line.map(Number);
        if (!map.has(name)) {
            map.set(name, []);
        }
        for (let garade of grades) {
            map.get(name).push(garade);
        }
    }

    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let kvp of sorted) {
        let score = kvp[1]; let sum = 0;
        score.forEach(num => sum += num);
        sum /= score.length;
        console.log(`${kvp[0]}: ${sum.toFixed(2)}`);
    }
} // 100/100 s obekt sig 6te6e po-lesno da stani
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
console.log('--------------');
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);