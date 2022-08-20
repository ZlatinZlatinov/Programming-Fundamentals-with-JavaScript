function csGO(userInput) {
    let hp = Number(userInput.shift());
    let winCounter = 0;

    for (let element of userInput) {
        if (element == 'End of battle') {
            console.log(`Won battles: ${winCounter}. Energy left: ${hp}`);
            return;
        }
        element = Number(element);
        if (hp >= element) {
            hp -= element;
            winCounter++;
        } else {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${hp} energy`);
            return;
        }
        if (winCounter % 3 == 0) {
            hp += winCounter;
        }
    }
} // 100 /100 simple as that
csGO(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

csGO(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);

