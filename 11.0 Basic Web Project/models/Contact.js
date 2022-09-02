// TODO: Create Contact model and export it 

class Contact {
    constructor (name, lastName, number) {
        this.name = name;  
        this.lastName = lastName;
        this.number = Number(number);
    }
} 

module.exports = Contact; 

/* We create our contact model which has a name and number as properties */