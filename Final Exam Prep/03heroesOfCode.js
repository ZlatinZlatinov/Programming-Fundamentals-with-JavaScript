function heroesOfCode(userInput) {
    let num = Number(userInput.shift());
    let counter = 0; let newObject = {};
    for (let line of userInput) {
        counter++;
        line = userInput.shift();
        let [name, hp, mana] = line.split(' ');
        hp = Number(hp), mana = Number(mana);

        if (newObject.hasOwnProperty(name) == false) {
            newObject[name] = [hp, mana];
        } else {
            if ((newObject[name][0] + hp) <= 100 || (newObject[name][1] + mana) <= 200) { 
                newObject[name][0] += hp;
                newObject[name][1] += mana;
            }
        }

        if (counter == num) {
            break;
        }
    }

    for (let line of userInput) {
        if (line == 'End') {
            break;
        }

        let [command, name, amount, type] = line.split(' - ');
        amount = Number(amount);

        switch (command) {
            case 'CastSpell':

                if (newObject[name][1] >= amount) { 
                    newObject[name][1] -= amount;
                    console.log(`${name} has successfully cast ${type} and now has ${newObject[name][1]} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${type}!`);
                }
                break;

            case 'TakeDamage':
                newObject[name][0] -= amount;

                if (newObject[name][0] > 0) {
                    console.log(`${name} was hit for ${amount} HP by ${type} and now has ${newObject[name][0]} HP left!`);
                } else {
                    delete newObject[name];
                    console.log(`${name} has been killed by ${type}!`);
                }
                break;

            case 'Recharge':
                let recharge = 0;

                for (let x = 1; x <= amount; x++) {
                    if (newObject[name][1] == 200) {
                        break;
                    }
                    recharge++;
                    newObject[name][1] += 1;
                }

                console.log(`${name} recharged for ${recharge} MP!`);
                break;

            case 'Heal':
                let heal = 0;

                for (let x = 1; x <= amount; x++) {
                    if (newObject[name][0] == 100) {
                        break;
                    }
                    heal++;
                    newObject[name][0] += 1;
                }

                console.log(`${name} healed for ${heal} HP!`);
                break;
        }
    }

    let entries = Object.entries(newObject);
    for (let [name, arr] of entries) {
        console.log(name);
        console.log(`  HP: ${arr[0]}`);
        console.log(`  MP: ${arr[1]}`);
    }
} //100/100
heroesOfCode(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
console.log('---------');
heroesOfCode(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);