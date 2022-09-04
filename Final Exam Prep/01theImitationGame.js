function theImitationGame(userInput) {
    let message1 = userInput.shift();
    let message = [];
    for (let i = 0; i < message1.length; i++) {
        message.push(message1[i]);
    }
    for (let element of userInput) {
        if (element == 'Decode') {
            console.log(`The decrypted message is: ${message.join('')}`);
            return;
        }
        element = element.split('|');
        let [command, firstParam, secondParam] = element;
        switch (command) {
            case 'Move':
                for (let i = 0; i < firstParam; i++) {
                    message.push(...message.shift());
                }
                break;
            case 'Insert':
                message.splice(firstParam, 0, ...secondParam);
                break;
            case 'ChangeAll':
                for (let el of message) {
                    if (el == firstParam) {
                        let index = message.indexOf(el);
                        message.splice(index, 1, secondParam);
                    }
                }
                break;
            default:
                break;
        }
    }
} // 100/100 seems to work just fine
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
);

console.log('++++++++++');

function solve(input) {
    let encryptedMessage = input.shift();

    for (let el of input) {
        if (el === `Decode`) {
            break;
        }
        let [command, firstParam, lastParam] = el.split("|");
        switch (command) {
            case `ChangeAll`:
                let substring = firstParam; // z
                let replacement = lastParam; // l
                // let regex = new RegExp(substring, 'g')
                // encryptedMessage = encryptedMessage.replace(regex, replacement); 
                while (encryptedMessage.includes(firstParam)) {
                    encryptedMessage = encryptedMessage.replace(substring, replacement);
                }  
                break;
            case `Insert`:
                let index = Number(firstParam); // 2
                let value = lastParam; // o
                encryptedMessage = encryptedMessage.split("");
                encryptedMessage.splice(index, 0, ...value); 
                //console.log(encryptedMessage);
                encryptedMessage = encryptedMessage.join("")
                break;
            case `Move`:
                let numOfLetters = Number(firstParam);
                let removed = encryptedMessage.substr(0, numOfLetters); // zzH
                encryptedMessage = encryptedMessage.replace(removed, "")
                encryptedMessage = encryptedMessage + removed; 
                break;

        }
    }
    console.log(`The decrypted message is: ${encryptedMessage}`)
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]); 