function muOnline(userInput) {
    userInput = userInput.split('|');
    let health = 100, coins = 0, roomCount = 0;

    for (let element of userInput) {
        let [command, value] = element.split(' ');
        value = Number(value); roomCount++;
        switch (command) {
            case 'potion':
                let counter = 0;
                for (let i = 0; i < value; i++) {
                    if (health < 100) {
                        health += 1; 
                        counter++
                    }
                    if (health == 100) {
                        break;
                    }
                }
                console.log(`You healed for ${counter} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
                break;
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
} // 100/100
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
//muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");