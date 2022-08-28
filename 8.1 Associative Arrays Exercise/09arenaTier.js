function arenaTier (inputArray) { 
    let galdiatorObject = {};
    for (let line of inputArray) {
        if (line == 'Ave Cesar') {
            break;
        }  

        line = line.split(' ');  

        if (line[1] == '->') { 
            let name = line[0], technicue = line[2], skill = Number(line[4])
            if (galdiatorObject.hasOwnProperty(name) == false) {
                galdiatorObject[name] = [[technicue, skill]];
            } else {
                galdiatorObject[name].push([technicue, skill]);
            }
        }

    } // nqa stane s masivi
    let entries = Object.entries(galdiatorObject); 
    for (let [name, arr] of entries) { 
        console.log(name);
        console.log(arr[0]);
    }
} // almost works xd
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar']); 
console.log('-----'); 
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);