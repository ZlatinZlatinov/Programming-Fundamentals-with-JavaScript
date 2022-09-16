function degustationParty(userInput) {
    let guests = {};
    let dislikes = 0;

    for (let line of userInput) {
        if (line == 'Stop') {
            break;
        }
        let [command, person, dish] = line.split('-');

        switch (command) {
            case 'Like':
                if (guests.hasOwnProperty(person) == false) {
                    guests[person] = [dish];
                } else {
                    if (guests[person].includes(dish) == false) {
                        guests[person].push(dish);
                    }
                }
                break;

            case 'Dislike':
                if (guests.hasOwnProperty(person) == false) {
                    console.log(`${person} is not at the party.`);
                } else {
                    if (guests[person].includes(dish) == false) {
                        console.log(`${person} doesn't have the ${dish} in his/her collection.`);
                    } else {
                        console.log(`${person} doesn't like the ${dish}.`);
                        dislikes++;
                        let index = guests[person].indexOf(dish);
                        guests[person].splice(index, 1);
                    }
                }
                break;
        }
    }

    let entries = Object.entries(guests);
    for (let [name, arr] of entries) {
        console.log(`${name}: ${arr.join(', ')}`);
    }
    console.log(`Unliked meals: ${dislikes}`);
} //100/100
degustationParty(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"]);
console.log('---------');
degustationParty(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"]);
console.log('---------');
degustationParty(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])