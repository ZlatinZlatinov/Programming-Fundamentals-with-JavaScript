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
            default: break;
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
//     console.log('---------'); 
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop']); 

console.log('+++++++++++++++++++++++++++');

    function thePianist1(input) {
        let num = Number(input.shift());
        let pianoPieces = {};
     
        for (let i = 0; i < num; i++) {
            let pianoList = input.shift().split("|")
            let piece = pianoList[0];
            let composer = pianoList[1];
            let key = pianoList[2];
            pianoPieces[piece] = {
                'composer' : composer,
                'key' : key
            };
        }
        while (input[0] != "Stop") {
            let tokens = input.shift().split("|");
            let command = tokens[0];
            let currentPiece = tokens[1];
            let currentComposer = tokens[2];
            let currentKey = tokens[3];
     
            switch (command) {
                case "Add":
                if(pianoPieces.hasOwnProperty(currentPiece)){
                    console.log(`${currentPiece} is already in the collection!`);
                    break;
                } else{
                    pianoPieces[currentPiece] = {
                        'composer' : currentComposer,
                        'key' : currentKey
                    };
                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);
                }
                    break;
     
                case "Remove":
                    if(pianoPieces.hasOwnProperty(currentPiece)){
                        delete pianoPieces[currentPiece] ;
                        console.log(`Successfully removed ${currentPiece}!`);
                    } else{
                        console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                        break;
                    }
                    break;
                case "ChangeKey":
                    if(pianoPieces.hasOwnProperty(currentPiece)){  
                       pianoPieces[currentPiece]['key'] = currentComposer;
                        console.log(`Changed the key of ${currentPiece} to ${currentComposer}!`);
                    } else{
                        console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                    }
                    break;
            }
        } 

        let entries = Object.entries(pianoPieces); 
        for (let [piece, object] of entries) {
            let entries1 = Object.entries(object); 
            console.log(`${piece} -> Composer: ${entries1[0][1]}, Key: ${entries1[1][1]}`);
        }
    }
    thePianist1([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]); 

    console.log('+++++++++++'); 

    let piece = 'Metal'; 
    let composer = 'AC/DC'; 
    let song = 'Thunderstruck';  
    let newObject = {};
    newObject[piece] = {composer, song};  
    console.log(newObject[piece].song); // it also works 

    console.log(`00000000000000000000`); 

    function thePianist2(input) {
        let num = Number(input.shift());
        let pianoPieces = {};
     
        for (let i = 0; i < num; i++) {
            let pianoList = input.shift().split("|")
            let piece = pianoList[0];
            let composer = pianoList[1];
            let key = pianoList[2];
            pianoPieces[piece] = {
                composer,
                key
            };
        }
        while (input[0] != "Stop") {
            let tokens = input.shift().split("|");
            let command = tokens[0];
            let currentPiece = tokens[1];
            let currentComposer = tokens[2];
            let currentKey = tokens[3];
     
            switch (command) {
                case "Add":
                if(pianoPieces.hasOwnProperty(currentPiece)){
                    console.log(`${currentPiece} is already in the collection!`);
                    break;
                } else{
                    pianoPieces[currentPiece] = {
                        currentComposer,
                        currentKey
                    };
                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);
                }
                    break;
     
                case "Remove":
                    if(pianoPieces.hasOwnProperty(currentPiece)){
                        delete pianoPieces[currentPiece] ;
                        console.log(`Successfully removed ${currentPiece}!`);
                    } else{
                        console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                        break;
                    }
                    break;
                case "ChangeKey":
                    if(pianoPieces.hasOwnProperty(currentPiece)){
                       pianoPieces[currentPiece].key = currentComposer;
                        console.log(`Changed the key of ${piece} to ${currentComposer}!`);
                    } else{
                        console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                    }
                    break;
            }
        }  
    }
    thePianist2([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop']);
