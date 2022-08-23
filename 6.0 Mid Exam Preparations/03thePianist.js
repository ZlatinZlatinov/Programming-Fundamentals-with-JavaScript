function thePianist (inputArray) { 
    let piecesObject = {};
    let num = Number(inputArray.shift()); 

    for (let x = 0; x < num; x++) {
        let [piece, composer, key] = inputArray[x].split('|'); 
        let newObject1 = { 
            'Composer' : composer, 
            'Key' : key
        }   
        piecesObject[piece] = newObject1;
    } 

    for (let x = num; x < inputArray.length; x++) {
        let line = inputArray[x]; 
        if (line == 'Stop') {
            break;
        }  
        let newObject = {};
        let [command, piece1, composer1, key1] = line.split('|'); 
        switch (command) {
            case 'Add' : 
            if (piecesObject.hasOwnProperty(piece1)) {
                console.log(`${piece1} is already in the collection!`);
            } else {
                newObject['Composer'] = composer1; 
                newObject['Key'] = key1; 
                piecesObject[piece1] = newObject; 
                console.log(`${piece1} by ${composer1} in ${key1} added to the collection!`);
            }
            break; 
            case 'Remove' : 
            if (piecesObject.hasOwnProperty(piece1)) {
                delete piecesObject[piece1]; 
                console.log(`Successfully removed ${piece1}!`);
            } else {
                console.log(`Invalid operation! ${piece1} does not exist in the collection.`);
            } 
            break; 
            case 'ChangeKey' : 
            if (piecesObject.hasOwnProperty(piece1)) {
                piecesObject[piece1]['Key'] = composer1; 
                console.log(`Changed the key of ${piece1} to ${composer1}!`);
            } else {
                console.log(`Invalid operation! ${piece1} does not exist in the collection.`);
            } 
            break;
        }
    } 
    let entries = Object.entries(piecesObject); 
    for (let [piece, obj] of entries) {
        let entries1 = Object.entries(obj); 
        console.log(`${piece} -> Composer: ${entries1[0][1]}, Key: ${entries1[1][1]}`);
    }
} // 100/100 booom sa-ala-sa
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop' ]); 
    console.log('---------'); 
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);