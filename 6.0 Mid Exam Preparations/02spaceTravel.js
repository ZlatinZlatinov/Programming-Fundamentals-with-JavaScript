function spaceTravel(userInput) {
    let ammo = Number(userInput.pop());
    let gas = Number(userInput.pop());
    let startString = userInput[0];
    startString = startString.split('||')
    for (let element of startString) {
        if (element == 'Titan') {
            console.log(`You have reached Titan, all passengers are safe.`);
            return;
        }
        element = element.split(' ');
        let command = element[0];
        switch (command) {
            case 'Travel':
                let lightYears = Number(element[1]);
                //gas -= lightYears; 
                if (gas - lightYears >= 0) { // moje i da e sus ili bez =
                    gas -= lightYears;
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                } else {
                    console.log('Mission failed.');
                    return;
                }
                break;
            case 'Enemy':
                let armor = Number(element[1]);
                if (ammo >= armor) {
                    ammo -= armor;
                    console.log(`An enemy with ${armor} armour is defeated.`);
                } else {
                    //gas -= 2 * ammo; 
                    if ((gas - 2 * armor) >= 0) { // i tuksa sus ili bez =
                        gas -= (2 * armor);
                        console.log(`An enemy with ${armor} armour is outmaneuvered.`);
                    } else {
                        console.log('Mission failed.');
                        return;
                    }
                }
                break;
            case 'Repair':
                let amount = Number(element[1]);
                gas += amount;
                ammo += (amount * 2);
                console.log(`Ammunitions added: ${amount * 2}.`);
                console.log(`Fuel added: ${amount}.`);
                break;
        }
    }
} // 100/100
spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80']);
console.log('-------------------');
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100']);

