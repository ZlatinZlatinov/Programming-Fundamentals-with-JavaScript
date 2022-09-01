function starEnigma(inputArray) {
    let stringsCount = Number(inputArray.shift());
    let star = ['s', 't', 'a', 'r']; let resultArr = [];

    for (let x = 0; x < stringsCount; x++) {
        let counter = 0;
        let string = (inputArray[x]).split('');

        string.forEach(char => {
            if (star.includes(char.toLowerCase())) {
                counter++
            }
        });

        let newArr = [];

        for (let char of string) {
            let asciiNum = char.charCodeAt(0);
            newArr.push(String.fromCharCode(asciiNum - counter));
        } 

        resultArr.push((newArr.join('')));
    }

    let attacked = [], destroyed = []; 

    for (let string of resultArr) {
        let regexP = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attack>[A|D])![^@\-!:>]*->(?<solders>\d+)/g;
        let res = regexP.exec(string);

        if (res) {
            let ad = res.groups['attack'];
            if (ad == 'A') {
                attacked.push(res.groups['planet']);
            } else {
                destroyed.push(res.groups['planet']);
            }
        }
    }

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.sort((a, b) => a.localeCompare(b)).forEach(p => console.log(`-> ${p}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.sort((a, b) => a.localeCompare(b)).forEach(p => console.log(`-> ${p}`));
} // tei dava 100/100  [^@\-!:>]* това проверява ако има някои от тези знаци вкл и 
//числа да ги пропуска  (по условие)

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
console.log('---------');
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);