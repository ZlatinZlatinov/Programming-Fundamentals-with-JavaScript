function companyUsers(userInput) {
    let remaper = new Map();
    for (let line of userInput) {
        let [company, employeeNum] = line.split(' -> ');
        let newarr = [];
        if (remaper.has(company) == false) {
            let sett = new Set();
            remaper.set(company, sett);
        }  
        remaper.get(company).add(employeeNum);
    }
    let entries = Array.from(remaper.entries()).sort();
    for (let [company, workers] of entries) {
        console.log(company);
        workers.forEach(w => console.log(`-- ${w}`))
    }
} // 100/100 p.s. даже и нз как работи то сет ама го ползвам хдд
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log('-----------');
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);