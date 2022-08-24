function converToObject(userInput) {
    let object = JSON.parse(userInput);
    let cat = Object.keys(object);
    for (let key of cat) {
        console.log(`${key}: ${object[key]}`);
    }
} // 100/100
console.log(converToObject('{"name": "George", "age": 40, "town": "Sofia"}'));
converToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');