function activationKeys(inputArray) {
    let rawKey = inputArray.shift();

    for (let line of inputArray) {
        if (line == "Generate") {
            console.log(`Your activation key is: ${rawKey}`);
            return;
        }
        line = line.split('>>>')
        let command = line[0], startIndex, endIndex;

        switch (command) {
            case 'Contains':
                let substring = line[1];

                if (rawKey.includes(substring)) {
                    console.log(`${rawKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

            case 'Flip':
                let flipper = line[1];
                startIndex = Number(line[2]), endIndex = Number(line[3]);
                let flippedResult = rawKey.substring(startIndex, endIndex);
                let firstPart = rawKey.substring(0, startIndex);
                let secondPart = rawKey.substring(endIndex);

                if (flipper == 'Upper') {
                    rawKey = `${firstPart}${flippedResult.toUpperCase()}${secondPart}`;
                    console.log(rawKey);
                } else {
                    rawKey = `${firstPart}${flippedResult.toLowerCase()}${secondPart}`;
                    console.log(rawKey);
                }
                break;

            case 'Slice':
                startIndex = Number(line[1]), endIndex = Number(line[2]);
                let sliced = rawKey.slice(startIndex, endIndex);
                rawKey = rawKey.replace(sliced, "").trim();
                console.log(rawKey);
                break;

            default:
                break;
        }
    }
} // 100/100
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('---------');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);

console.log('++++++++++++++++++++');

function activationKeys2(inputArray) {
    let rawKey = inputArray.shift();

    for (let line of inputArray) {
        if (line == "Generate") {
            console.log(`Your activation key is: ${rawKey}`);
            return;
        }
        line = line.split('>>>')
        let command = line[0], startIndex, endIndex;

        switch (command) {
            case 'Contains':
                let isIncluded = contains(rawKey, line[1]);
                console.log(isIncluded);
                break;

            case 'Flip':
                startIndex = Number(line[2]), endIndex = Number(line[3]);
                rawKey = flip(rawKey, line[1], startIndex, endIndex);
                console.log(rawKey);
                break;

            case 'Slice':
                startIndex = Number(line[1]), endIndex = Number(line[2]);
                rawKey = slice(rawKey, startIndex, endIndex);
                console.log(rawKey);
                break;

            default:
                break;
        }
    }

    function contains(rawKey, substring) { // line[1]
        if (rawKey.includes(substring)) {
            return `${rawKey} contains ${substring}`;
        } else {
            return 'Substring not found!';
        }
    }

    function flip(rawKey, flipper, startIndex, endIndex) { //line[1], line[2-3] as numbers
        let flippedResult = rawKey.substring(startIndex, endIndex);
        let firstPart = rawKey.substring(0, startIndex);
        let secondPart = rawKey.substring(endIndex);

        if (flipper == 'Upper') {
            return `${firstPart}${flippedResult.toUpperCase()}${secondPart}`;
        } else {
            return `${firstPart}${flippedResult.toLowerCase()}${secondPart}`;
        }
    }

    function slice(rawKey, startIndex, endIndex) {
        let sliced = rawKey.slice(startIndex, endIndex);
        return rawKey.replace(sliced, "").trim();
    }
} // ми принципно кода не се съкращава особено, но да иначе горе изглежда четимо 
// и поне на нулевтите тестове са еднакви резултатите

activationKeys2(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('---------');
activationKeys2(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);