function dungeonnestDark(randomInput) {
    randomInput = randomInput.split('|');
    let initialHealth = 100, initialCoins = 0;
    let index = 0; let bestRoom = 1;

    while (index < randomInput.length) {
        let command = randomInput[index];
        let [niz, chislo] = command.split(' ');
        switch (niz) {
            case 'potion':
                let counter = 0;
                for (let i = 0; i < chislo; i++) {
                    if (initialHealth < 100) {
                        initialHealth += 1;
                        counter++;
                    }
                    if (initialHealth == 100) {
                        break;
                    }
                }
                console.log(`You healed for ${counter} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
                break;
            case 'chest':
                initialCoins += Number(chislo);
                console.log(`You found ${chislo} coins.`);
                break;
            default:
                initialHealth -= Number(chislo);
                if (initialHealth <= 0) {
                    console.log(`You died! Killed by ${niz}.`);
                    console.log(`Best room: ${bestRoom}`);
                    return;
                } else {
                    console.log(`You slayed ${niz}.`);
                }
                break;
        }
        bestRoom++;
        index++;
    }
    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
} // 100/100 amaa da.. e sq raboti ve4e ma kuf e toz while wtf
dungeonnestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
/// mii da kajem 4e do nqkude ba`4ka ama juj ne priznava tuk.split