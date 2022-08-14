function dungeonsDark2nd(inputArray) {
    let string = inputArray[0].split('|');
    let initialHealth = 100, coins = 0, rooms = 0;

    for (let line of string) {
        rooms++;
        let [word, num] = line.split(' ');
        num = Number(num);

        switch (word) {
            case 'potion': {
                let healing = 0;

                for (let x = 0; x < num; x++) {
                    if (initialHealth == 100) {
                        break;
                    }
                    healing++;
                    initialHealth++;
                }
                
                console.log(`You healed for ${healing} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
            }
                break;

            case 'chest':
                coins += num;
                console.log(`You found ${num} coins.`);
                break;

            default:
                initialHealth -= num;

                if (initialHealth > 0) {
                    console.log(`You slayed ${word}.`);
                } else {
                    console.log(`You died! Killed by ${word}.`);
                    console.log(`Best room: ${rooms}`);
                    return;
                }
        }
    }
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${initialHealth}`);
} // 100/100 ... simple as that
dungeonsDark2nd(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('-------');
dungeonsDark2nd(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);