function race(inputArray) {
    let namePattern = /(?<name>[A-Za-z]+)/g;
    let distancePattern = /[0-9]/g; let namesObject = {};

    let namesArr = inputArray
        .shift()
        .split(', ')
        .forEach(name => namesObject[name] = 0);

    for (let element of inputArray) {
        if (element == 'end of race') {
            break;
        }

        let sum = 0;
        let matchName = element.match(namePattern).join('');
        let matchDistance = element
            .match(distancePattern)
            .forEach(num => sum += Number(num)); 

        if (namesObject.hasOwnProperty(matchName)) {
            namesObject[matchName] += sum;
        }
    } 
    let entries = Object.entries(namesObject).sort((a, b) => b[1] - a[1]).slice(0, 3);

    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
} // boooom 100/100
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
//race();