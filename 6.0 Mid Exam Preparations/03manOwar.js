function manOwar(userInput) {
    let pirateShip = userInput.shift().split('>').map(Number);
    let warShip = userInput.shift().split('>').map(Number);
    let health = Number(userInput.shift());

    for (let element of userInput) {
        if (element == 'Retire') {
            break;
        }
        element = element.split(' ');

        let command = element[0];
        let index, damage, endindex;
        switch (command) {
            case 'Fire':
                index = Number(element[1]), damage = Number(element[2]);
                if (index >= 0 && index < warShip.length ) {
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;
            case 'Defend':
                index = Number(element[1]); endindex = Number(element[2]); damage = Number(element[3]);
                if (index >= 0 && endindex < pirateShip.length) {
                    for (let i = index; i <= endindex; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                index = Number(element[1]); damage = Number(element[2]);
                if (index >= 0 && index < pirateShip.length) {
                    for (let i = 0; i < damage; i++) {
                        pirateShip[index] += 1;
                        if (pirateShip[index] == health) {
                            break;
                        }
                    }
                }
                break;
            case 'Status':
                let count = 0; let minimumHealth = health * 0.2;
                for (let el of pirateShip) {
                    if (el < minimumHealth) {
                        count++;
                    }
                }
                if (count > 0) {
                    console.log(`${count} sections need repair.`);
                }
                break;
        }
    } 

    let sumPirates = 0, sumWarship = 0;
    for (let a of pirateShip) {
        sumPirates += a;
    }
    for (let b of warShip) {
        sumWarship += b;
    }
    console.log(`Pirate ship status: ${sumPirates}\nWarship status: ${sumWarship}`);
} // ae 100/100 da si znaqt
// manOwar(["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"]);
// console.log('=-=-=-==-=-=-=-=-=-=-=-=-=');
// manOwar(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"]); 
console.log(`----------------`);  
manOwar (["2>3>4>5>6", 
"2>3>4>5>6>10>11",
"15", 
"Fire 3 1", 
"Fire 2 1", 
"Fire 1 1", 
"Defend 0 4 1", 
"Repair 0 26", 
"Retire"]);

function test () { 
    let sum = 0;
    let arr = [1, 2, 3, 4, 5];  
    arr.forEach(x => sum += x); 
    console.log(arr); 
    // амии става да се намира примерно крайната сума от сбора на стойностите на елементите в масив
    // поне за ся тва върши ралта , също става и с .reduce 
    let arr2 = [3, 3, 7, 7]; 
    let sum1 = arr2.reduce((a, b) => a + b); 
    console.log(sum1);
} 
//test();

