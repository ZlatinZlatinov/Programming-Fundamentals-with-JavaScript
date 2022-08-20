function theHuntingGames(userInput) {
    userInput = userInput.map(Number);
    let daysOfAdventure = userInput.shift();
    let numberOfPlayers = userInput.shift();
    let energy = userInput.shift();
    let waterperDay = userInput.shift();
    let foodperDay = userInput.shift();
    let day = 0;
    let totalWater = numberOfPlayers * waterperDay * daysOfAdventure;
    let totalFood = numberOfPlayers * foodperDay * daysOfAdventure;

    for (let element of userInput) {
        if (energy - element <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        } else {
            energy -= element;
        }

        day++;
        if (day % 2 == 0) {
            energy *= 1.05;
            totalWater -= (totalWater * 0.3);
        }
        if (day % 3 == 0) {
            energy *= 1.10;
            totalFood -= totalFood / numberOfPlayers;
        }

        if (energy > 0 && day == daysOfAdventure) {
            console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
            return;
        }
    }
} // 100/100
theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);
console.log('---------------------------------');
theHuntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]);

