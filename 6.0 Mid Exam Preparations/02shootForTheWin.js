function shootForTheWin(userInput){
    let targets = userInput.shift().split(' ').map(Number); 
    
    for (let element of userInput) {
        if (element == 'End') {
            break;
        } 
        let index = Number(element);  
        if (index >= 0 && index < targets.length) { 
            let num = targets[index];
            targets[index] = -1; 
            for (let el of targets ){
                if ( num < el && el != -1 && num != -1) {
                    targets[targets.indexOf(el)] -= num;
                } 
                if (num >= el && el != -1 && num != -1) {
                    targets[targets.indexOf(el)] += num;
                }
            } 
            
        }
    }  
    let count = 0; 
    for (let ele of targets) {
        if (ele == -1){
            count++;
        }
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
} // 90/100 nqa koi sa zanimma poi4e
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]); 
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);

