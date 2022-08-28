function oddOccurrences(userInput) {
    let printline = '';
    let map = new Map();
    userInput = userInput.split(' ');
    for (let word of userInput) {
        word = word.toLowerCase(); // e taka връща думата с малки букви
        let counter = 1;
        if (map.has(word)) {
            let num = map.get(word) + counter;
            map.set(word, num);
        } else {
            map.set(word, counter);
        }

    }
    let array = Array.from(map.entries())/*.filter(([word, count]) => {
        if (count % 2 == 1) {
            return true;
        } else {
            return false;
        }
    })*/; // moje i taka sus .filter
    for (let entries of array) {
        let [word, count] = entries;
        if (count % 2 != 0) {
            printline += `${word} `
        }
    }

    console.log(printline);
} // 100/100
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');