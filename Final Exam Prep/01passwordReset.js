function passwordReset(userInput) {
    let string = userInput.shift();
    for (let line of userInput) {
        if (line == 'Done') {
            console.log(`Your password is: ${string}`);
            break;
        }
        line = line.split(' ');
        switch (line[0]) {
            case 'TakeOdd':
                let newString = ''
                for (let x = 0; x < string.length; x++) {
                    let char = string[x];
                    if (x % 2 !== 0) {
                        newString += `${char}`;
                    }
                }
                string = newString;
                console.log(string);
                break;
            case 'Cut':
                let index = Number(line[1]), length = Number(line[2]);
                let occurance = string.substring(index, (index + length));
                string = string.replace(occurance, "");
                console.log(string);
                break;
            case 'Substitute':
                let substring = line[1], substituteStr = line[2];
                if (string.includes(substring)) {
                    while (string.includes(substring) == true) {
                        string = string.replace(substring, substituteStr);
                    }
                    console.log(string);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
    }
} // 100/100 Тряа видя ако моа го съкратя малко
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
console.log('--------');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);

console.log('++++++++++++++');

function passwordResetSenior(userInput) {
    let password = userInput.shift();

    let commandsObject = {
        'TakeOdd': (password) => {
            return password
                .split('')
                .filter((symbol, index) => index % 2 !== 0) // филтер приема символ/елемент и индекс
                .join('');
        },

        'Cut': (password, index, length) => {
            index = Number(index); length = Number(length);
            return password.replace(password.slice(index, index + length), "");
        }, // може и със substr (ne substring) приема индекс и дължина

        'Substitute': (password, substring, substitute) => {
            if (password.includes(substring)) {
                let regex = new RegExp(substring, 'g');
                return password.replace(regex, substitute);
            } else {
                return 'Nothing to replace!'; // tuka moje i naprao console.log
            }
        }
    }

    for (let line of userInput) {
        if (line == 'Done') {
            break;
        }

        let [command, ...tokens] = line.split(' '); // тук сплитва линията по празни интервали като на индекс 0 е командата и на следващите се разпределят различните елементи
        let result = commandsObject[command](password, ...tokens);
        console.log(result);
        if (result !== 'Nothing to replace!') {
            password = result;
        }
    }
    console.log(`Your password is: ${password}`);
} // 100/100 може и с обекти, па може и с вложени вункции
passwordResetSenior(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
console.log('--------');
passwordResetSenior(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);