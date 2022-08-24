function converToJSON(name, lastName, hairColor) {
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }
    //let someString = JSON.stringify(object);
    console.log(JSON.stringify(object));
}// 100/100
converToJSON('George', 'Jones', 'Brown');
converToJSON('Peter', 'Smith', 'Blond');