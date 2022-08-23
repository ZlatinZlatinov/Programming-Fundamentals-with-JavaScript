function hearDelivery(userInput) {
    let hood = userInput.shift().split('@');
    hood = hood.map(Number); let comm = '';
    let positionIndex = 0; let houseCount = 0;
    let lastPosition = 0;
    for (let element of userInput) {
        element = element.split(' ');
        let command = element[0];
        if (command == 'Love!') {
            comm = command;
            lastPosition = positionIndex;
            break;
        }
        positionIndex += Number(element[1]);
        if (positionIndex >= hood.length) {
            positionIndex = 0;
        }
        if (hood[positionIndex] == 0) {
            console.log(`Place ${positionIndex} already had Valentine's day.`);
            continue;
        }
        hood[positionIndex] -= 2;

        if (hood[positionIndex] == 0) {
            console.log(`Place ${positionIndex} has Valentine's day.`);
        }
        let sum = 0;
        for (let element1 of hood) {
            sum += element1;

        }
        if (sum == 0) {
            console.log(`Cupid's last position was ${positionIndex}.`);
            console.log(`Mission was successful.`);
            return;
        }

    }
    for (let element of hood) {
        if (element != 0) {
            houseCount++;
        }
    }
    if (comm == 'Love!' && houseCount > 0) {
        console.log(`Cupid's last position was ${lastPosition}.`);
        console.log(`Cupid has failed ${houseCount} places.`);
    }


} // 90/100 not bad at all
// hearDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]); 
console.log('-------------------------');
hearDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);
console.log('-------------------------');
// hearDelivery(["4@2@4@2",
// "Jump 1",
// "Jump 2",
// "Jump 1",
// "Jump 2",
// "Jump 2",
// "Jump 2",
// "Love!"]); 

function hearDeliverySenior (userInput){
    let houses = userInput.shift().split('@').map(Number); 
    let cupidIndex = 0; 

    while (userInput[0] != 'Love!') {
        let tokens = userInput.shift().split(' '); 
        let jumpRange = Number(tokens[1]); 

        cupidIndex += jumpRange; 

        if(cupidIndex >= houses.length) {
            cupidIndex = 0;
        } 

        if (houses[cupidIndex] == 0){
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
        } else {
            houses[cupidIndex] -= 2; 
            if (houses[cupidIndex] == 0){
                console.log(`Place ${cupidIndex} has Valentine's day.`);
            }
        }
    } 

    let missed = 0; 
    for (let currentHouse of houses){
        if (currentHouse > 0){
            missed++;
        }
    } 
    console.log(`Cupid's last position was ${cupidIndex}.`);
    if(missed > 0){
        console.log(`Cupid has failed ${missed} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
} // 100/100
hearDeliverySenior(["4@2@4@2",
"Jump 1",
"Jump 2",
"Jump 1",
"Jump 2",
"Jump 2",
"Jump 2",
"Love!"]);
