function cardGame(userInput) {
    let newMap = new Map();
    for (let line of userInput) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', '); 
        for (let x = 0; x < cards.length; x++) {
            let c1 = cards[x]; 
            for (let y = x+1; y < cards.length; y++) {
                let c2 = cards[y]; 
                if (c1 == c2) {
                    let index = cards.indexOf(c2); 
                    cards.splice(index, 1);
                }
            }
        } // emm po dobre 6e e sys SET za da ne praq 10 for a 
        // set slaga samo unikalnite stojnosti, ako se povtarqt ne gi slaga
        if (newMap.has(name)) {
            let newHand = newMap.get(name);
            for (let card of cards) {
                if (!newHand.includes(card)) {
                    newHand.push(card);
                }
            }
            newMap.set(name, newHand);
        } else {
            newMap.set(name, cards);
        }
    }
    let entries = Array.from(newMap.entries());
    for (let [name, hand] of entries) {
        let result = 0; 
        for (let card of hand) {
            let power = 0;
            let num, num1, color; 
            if (card.length == 2) {
                [num, color] = card.split('');
            } else {
                [num, num1, color] = card.split('');
            }
                switch (num) { 
                    case '2':
                        power = 2;
                        break; 
                    case '3':
                        power = 3;
                        break; 
                    case '4':
                        power = 4;
                        break; 
                    case '5':
                        power = 5;
                        break; 
                    case '6':
                        power = 6;
                        break; 
                    case '7':
                        power = 7;
                        break; 
                    case '8':
                        power = 8;
                        break; 
                    case '9':
                        power = 9;
                        break;
                    case '1':
                        power = 10;
                        break;
                    case 'J':
                        power = 11;
                        break;
                    case 'Q':
                        power = 12;
                        break;
                    case 'K':
                        power = 13;
                        break;
                    case 'A':
                        power = 14;
                        break;
                    default:
                        break;
                }
            switch (color) {
                case 'S':
                    power *= 4;
                    break;
                case 'H':
                    power *= 3;
                    break;
                case 'D':
                    power *= 2;
                    break;
                case 'C':
                    power = power * 1;
                    break;
                default: break;
            }
            result += power;
        }
        console.log(`${name}: ${result}`);
    }
} // на тжа дава 60, в тест дава 100/100
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
   'Peter: JD, JD, JD, JD, JD, JD'
]); 
console.log('-----------'); 
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);