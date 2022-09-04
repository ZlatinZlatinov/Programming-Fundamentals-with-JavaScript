function hogwards(userInput) {
    let spell = userInput.shift();

    for (let line of userInput) {
        if (line == 'Abracadabra') {
            break;
        }

        let [command, index, value] = line.split(' ');
        switch (command) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;

            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;

            case 'Illusion':
                index = Number(index);
                if (index >= 0 && index < spell.length) {
                    let replacemetn = spell[index];
                    spell = spell.replace(replacemetn, value);
                    console.log('Done!');
                } else {
                    console.log('The spell was too weak.');
                }
                break;

            case 'Divination':
                if (spell.includes(index)) {
                    while (spell.includes(index)) {
                        spell = spell.replace(index, value);
                    }
                    console.log(spell);
                }
                break;

            case 'Alteration':
                if (spell.includes(index)) {
                    spell = spell.replace(index, '');
                    console.log(spell);
                }
                break;
            default:
                console.log('The spell did not work!');
                break;
        }
    }
} // 100/100
hogwards(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]);
console.log('-------------');
hogwards(["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"]);
console.log('-------------');
hogwards(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"]);