function messageTranslator(userInput) {
    let num = Number(userInput.shift());

    for (let x = 0; x < num; x++) {
        let line = userInput[x];
        let regexP = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[a-zA-Z]{8,})]/g;
        let match = line.match(regexP);

        if (match == null) {
            console.log('The message is invalid');
        } else {
            let regex2 = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[a-zA-Z]{8,})]/g;
            let regex3 = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[a-zA-Z]{8,})]/g;
            let command = regex2.exec(line).groups['command'];
            let string = regex3.exec(line).groups['string'];
            let arr = [];
            for (let x = 0; x < string.length; x++) {
                let num = string.charCodeAt(x);
                if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
                    arr.push(num);
                }
            }
            console.log(`${command}: ${arr.join(' ')}`);
        }
    }
} // 100/100
messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]);
console.log('---------');
messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]);