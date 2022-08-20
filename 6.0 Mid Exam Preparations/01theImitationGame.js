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