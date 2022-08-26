function wordOccurrences(userInput) {
    let map = new Map();
    for (let word of userInput) {
        let counter = 1;
        if (map.has(word)) {
            let num = (map.get(word) + counter);
            map.set(word, num);
        } else {
            map.set(word, counter);
        }
    }
    let arr = Array
        .from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .forEach(ar => console.log(`${ar[0]} -> ${ar[1]} times`));
} // 100/100
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('----------------');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);