function bonusScoringSystem(userInput) {
    userInput = userInput.map(Number);
    let studentsCount = userInput.shift();
    let lecturesCount = userInput.shift();
    let bonus = userInput.shift();
    let newArray = []; let max = Number.MIN_SAFE_INTEGER;
    let attendances = 0;
    for (let element of userInput) {
        let totalBonus = (element / lecturesCount) * (5 + bonus);
        if (totalBonus > max) {
            max = totalBonus;
            attendances = element;
        }
        newArray.push(totalBonus);
    }
    newArray.sort((a, b) => b - a);
    console.log(`Max Bonus: ${Math.ceil(max)}.`);
    console.log(`The student has attended ${attendances} lectures.`);
} // 90/100 
bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);