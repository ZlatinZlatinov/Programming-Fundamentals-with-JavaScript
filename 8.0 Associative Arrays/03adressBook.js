function adressBook (userInput) {
    let newObj = {}; 
    for (let line of userInput) {
        let [name, adress] = line.split(':'); 
        newObj[name] = adress;
    } 
    let newArr = Object.entries(newObj); 
    newArr.sort((a,b) => a[0].localeCompare(b[0])); 
    newArr.forEach((a) => console.log(`${a[0]} -> ${a[1]}`));
} //100/100
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
); 
console.log('-------------'); 
adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);