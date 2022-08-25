function makeAdictionary(userInput) {
    let newArr = [];
    for (let element of userInput) {
        let newObject = JSON.parse(element);
        newArr.push(newObject);
    }
    for (let x = 0; x < newArr.length - 1; x++) {
        let objA = newArr[x];
        for (let y = x + 1; y < newArr.length; y++) {
            let objB = newArr[y];
            let compariston = Object.keys(objB).toString();
            if (objA.hasOwnProperty(compariston)) {
                let index = newArr.indexOf(objA);
                newArr.splice(index, 1);
            }
        }
    }
    newArr.sort(function (first_el, second_el) {
        // selecting key to sort
        let fname = Object.keys(first_el).toString();
        let sname = Object.keys(second_el).toString();

        if (fname.localeCompare(sname) < 0)
            return -1;
        else if (fname.localeCompare(sname) > 0)
            return 1;
        else if (fname.localeCompare(sname) == 0)
            return 0;
    });
    newArr.forEach(obj =>
        console.log(`Term: ${Object.keys(obj)} => Definition: ${Object.values(obj)}`)
    );
} // 100/100 Woooooo #Rick Flair
makeAdictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Coffee":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
