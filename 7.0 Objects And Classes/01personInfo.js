function personInfo(name, lastName, age) {
    let myObject = {
        firstName: name,
        lastName: lastName,
        age: Number(age)
    }
    return myObject;
} // 100/100
personInfo("Peter",
    "Pan",
    "20"
);
personInfo("George",
    "Smith",
    "18"
);