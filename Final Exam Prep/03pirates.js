function caribbeanPirates(inputArray) {
    let newObject = {}, counter = 0;

    for (let line of inputArray) {
        counter++;
        if (line == "Sail") {
            break;
        }

        let newArray = [];
        let [city, population, gold] = line.split('||');
        newArray.push(Number(population), Number(gold))

        if (newObject.hasOwnProperty(city) == false) {
            newObject[city] = newArray
        } else {
            newObject[city][0] += newArray[0];
            newObject[city][1] += newArray[1];
        }
    }

    for (let x = 0; x < counter; x++) {
        let randomName = inputArray.shift();
    }

    for (let line of inputArray) {
        if (line == "End") {
            break;
        }

        let [command, city, population, gold] = line.split('=>');
        switch (command) {
            case 'Plunder':
                newObject[city][0] -= Number(population);
                newObject[city][1] -= Number(gold);
                console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);

                if (newObject[city][0] == 0 || newObject[city][1] == 0) {
                    delete newObject[city];
                    console.log(`${city} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                gold = Number(population);

                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    newObject[city][1] += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${newObject[city][1]} gold.`);
                }
        }
    }

    let entries = Object.entries(newObject);
    if (entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        for (let [name, array] of entries) {
            console.log(`${name} -> Population: ${array[0]} citizens, Gold: ${array[1]} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
} // 100/100 atm
caribbeanPirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
console.log('---------');
caribbeanPirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);