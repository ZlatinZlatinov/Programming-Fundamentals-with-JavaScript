function airPollution(array, commands) {

    let mapSofia = array.slice();

    for (let i = 0; i < 5; i++) {
        mapSofia[i] = mapSofia[i].split(" ")
            .map(Number);
    }

    while (commands.length > 0) {
        let nextCommand = commands.shift()
            .split(" ");

        switch (nextCommand[0]) {
            case "breeze":
                let row = Number(nextCommand[1]);
                for (let i = 0; i < 5; i++) {
                    mapSofia[row][i] -= 15;
                }
                break;

            case "gale":
                let column = Number(nextCommand[1]);
                for (let i = 0; i < 5; i++) {
                    mapSofia[i][column] -= 20;
                }
                break;
            case "smog":
                let value = Number(nextCommand[1]);
                for (let i = 0; i < 5; i++) {
                    for (let k = 0; k < 5; k++) {
                        mapSofia[i][k] += value;
                    }
                }
                break;
        }
    }
    let pollutedCells = [];
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            if (mapSofia[i][k] >= 50) {
                let curentCell = "[" + i + "-" + k + "]";
                pollutedCells.push(curentCell);
            }
        }
    }

    if (pollutedCells.length == 0) {
        console.log("No polluted areas");
    } else {
        console.log(`Polluted areas: ${pollutedCells.join(", ")}`);
    }


}
airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);

function airPollution2(arr1, arr2) {
    let sofiaMap = arr1.slice();
    for (let x = 0; x < sofiaMap.length; x++) {
        let element = sofiaMap[x];
        sofiaMap[x] = element.split(' ').map(Number);
    }

    for (let element of arr2) {
        let [command, value] = element.split(' ');
        value = Number(value);
        switch (command) {
            case 'breeze':
                for (let x = 0; x < 5; x++) {
                    if (sofiaMap[value][x] - 15 >= 0) {
                        sofiaMap[value][x] -= 15;
                    } else {
                        sofiaMap[value][x] = 0;
                    }
                }
                break;
            case 'gale':
                for (let x = 0; x < 5; x++) {
                    if (sofiaMap[x][value] - 20 >= 0) {
                        sofiaMap[x][value] -= 20;
                    } else {
                        sofiaMap[x][value] = 0;
                    }
                }
                break;
            case 'smog':
                for (let x = 0; x < 5; x++) {
                    sofiaMap[x] = sofiaMap[x].map(n => n + value);
                }
                break;
        }
    }
    let resultArray = [];
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            if (sofiaMap[x][y] >= 50) {
                let res = `[${x}-${y}]`;
                resultArray.push(res);
            }
        }
    }

    if (resultArray.length == 0) {
        console.log('No polluted areas');
    } else {
        console.log(`Polluted areas: ${resultArray.join(', ')}`);
    }
} // 100/100
airPollution2(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);