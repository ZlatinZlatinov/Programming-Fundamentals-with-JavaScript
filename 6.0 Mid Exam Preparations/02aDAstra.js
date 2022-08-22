function adAstra(userInput) {
    let regexP = /([#\|])(?<food>[a-zA-Z]+|[a-zA-Z]+[\s][a-zA-Z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,4})\1/g;
    let match = userInput[0].match(regexP); let calories = 0;
    if (match == null) {
        console.log('You have food to last you for: 0 days!');
        return;
    }

    for (let m of match) {
        let rgxP1 = /([#\|])(?<food>[a-zA-Z]+|[a-zA-Z]+[\s][a-zA-Z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,4})\1/g;
        calories += Number(rgxP1.exec(m).groups['cal']);
    }

    let days = calories / 2000;
    console.log(`You have food to last you for: ${Math.trunc(days)} days!`);

    for (let m of match) {
        let rgxPFood = /([#\|])(?<food>[a-zA-Z]+|[a-zA-Z]+[\s][a-zA-Z]+)\1/g;
        let rgxPDate = /([#\|])(?<date>\d{2}\/\d{2}\/\d{2})\1/g;
        let rgxPCal = /([#\|])(?<cal>\d{1,4})\1/g;

        let item = rgxPFood.exec(m).groups['food'];
        let date = rgxPDate.exec(m).groups['date'];
        let nutrition = rgxPCal.exec(m).groups['cal'];
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${nutrition}`);
    }
} // 100/100
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']
);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);