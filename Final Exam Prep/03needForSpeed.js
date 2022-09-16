function needForSpeed(userInput) {
    let num = Number(userInput.shift());
    let carsObject = {};
    for (let x = 0; x < num; x++) {
        let line = userInput[x];
        let [make, mileage, fuel] = line.split('|');
        mileage = Number(mileage), fuel = Number(fuel);
        carsObject[make] = [mileage, fuel];
    }

    for (let x = num; x < userInput.length; x++) {
        let line = userInput[x];
        if (line == 'Stop') {
            break;
        }

        let [command, make, value1, value2] = line.split(' : ');
        value1 = Number(value1);
        switch (command) {
            case 'Drive':
                value2 = Number(value2); // value1 = distance, value2 = fuel
                if (carsObject[make][1] < value2) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carsObject[make][0] += value1;
                    carsObject[make][1] -= value2; // ?? questionable
                    console.log(`${make} driven for ${value1} kilometers. ${value2} liters of fuel consumed.`);

                    if (carsObject[make][0] >= 100000) {
                        console.log(`Time to sell the ${make}!`);
                        delete carsObject[make];
                    }
                }
                break;

            case 'Refuel': // car, fuel
                let counter = 0;
                for (let x = 0; x < value1; x++) {
                    if (carsObject[make][1] == 75) {
                        break;
                    }
                    counter++;
                    carsObject[make][1] += 1;
                }
                console.log(`${make} refueled with ${counter} liters`);
                break;

            case 'Revert': // car, mileage 
                if ((carsObject[make][0] - value1) < 10000) {
                    carsObject[make][0] = 10000;
                } else {
                    carsObject[make][0] -= value1;
                    console.log(`${make} mileage decreased by ${value1} kilometers`);
                }
                break;
            default:
                break;
        }
    }

    let entries = Object.entries(carsObject);
    for (let [car, arr] of entries) {
        console.log(`${car} -> Mileage: ${arr[0]} kms, Fuel in the tank: ${arr[1]} lt.`);
    }
} // 100/100 moje i da ne go praq s masiv ami sus 2 obekat ama i tai staa
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);
console.log('++++++++++++++++');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);