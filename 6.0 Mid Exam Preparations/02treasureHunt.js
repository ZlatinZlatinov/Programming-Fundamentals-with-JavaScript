function treasureHunt(userInput) {
    let chest = userInput.shift().split('|');

    for (let element of userInput) {
        if (element == 'Yohoho!') {
            break;
        }
        element = element.split(' ');
        let command = element[0];

        switch (command) {
            case 'Loot':
                for (let i = 1; i < element.length; i++) {
                    let item = element[i];
                    let isIncluded = chest.includes(item);
                    if (!isIncluded) {
                        chest.unshift(item);
                    }
                }
                break;
            case 'Drop':
                let index = Number(element[1]);
                if (index >= 0 && index < chest.length) {
                    let pusher = chest.splice(index, 1)
                    chest.push(...pusher);
                }
                break;
            case 'Steal':
                let count = Number(element[1]);
                let stolen = chest.splice(-count);
                console.log(stolen.join(', '));
                break;

            default: break;
        }

        if (chest.length <= 0) {
            console.log(`Failed treasure hunt.`);
            return;
        }
    } 
    
    let itemLength = 0;
    for (let i = 0; i < chest.length; i++) {
        let element = chest[i];
        itemLength += element.length;
    }
    let sum = itemLength / chest.length;
    console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
} // nqma tolkoz eee 100/100
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
);
