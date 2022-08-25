function catalogue(userInput) {
    userInput.sort((a, b) => a.localeCompare(b));
    let newObject = {};

    for (let line of userInput) {
        let [product, price] = line.split(' : ');

        if (newObject.hasOwnProperty(product[0]) == false) {
            newObject[product[0]] = [`${product}: ${price}`];
        } else {
            newObject[product[0]].push(`${product}: ${price}`);
        }
    }

    let entries = Object.entries(newObject);
    for (let [letter, array] of entries) {
        console.log(letter);
        array.forEach(str => console.log(`  ${str}`));
    }
} //  100/100 (case insensitive sorting, thats why I used localeCompare)
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'deodorant : 10',
    'boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
])