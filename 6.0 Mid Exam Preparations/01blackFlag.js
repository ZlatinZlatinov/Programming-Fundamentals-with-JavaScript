function captainJackSparrow(userInput) {
    let days = Number(userInput[0]);
    let dailyPlunder = Number(userInput[1]);
    let expectedPlunder = Number(userInput[2]);

    let finalSum = 0;
    for (let i = 1; i <= days; i++) {
        finalSum += dailyPlunder;
        if (i % 3 == 0) {
            finalSum += (dailyPlunder * 0.5);
        }
        if (i % 5 == 0) {
            finalSum -= (finalSum * 0.3)
        }
    }
    if (finalSum >= expectedPlunder) {
        console.log(`Ahoy! ${finalSum.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (finalSum * 100) / expectedPlunder;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
} // 100/100
captainJackSparrow((["10","20","380"])); 
captainJackSparrow(["5","40","100"]); // seems to work just fine xdd
