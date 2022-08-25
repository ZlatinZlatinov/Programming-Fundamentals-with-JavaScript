function employee (userInput) {
    class Employee {
        constructor (firstName, lastName) {
            this.name = firstName; 
            this.nameLast = lastName;
        }
    } 
    for (let element of userInput) { 
        let personalNumber = element.length;
        let [firstN, lastN] = element.split(' '); 
        let empl = new Employee (firstN, lastN); 
        console.log(`Name: ${empl.name} ${empl.nameLast} -- Personal Number: ${personalNumber}`);
    }
} //66/100
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    ); 
console.log('------------------'); 

function employee2 (userInput) {
    let eployees = {}; 
    for (let element of userInput) { 
        eployees.firstName = element; 
        eployees.personalNum = element.length; 
        console.log(`Name: ${eployees.firstName} -- Personal Number: ${eployees.personalNum}`);
    } 
} // 100/100

employee2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);