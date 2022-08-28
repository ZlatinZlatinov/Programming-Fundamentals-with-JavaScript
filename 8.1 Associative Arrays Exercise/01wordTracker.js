function wordTracker(userInput) {
    let newArray = userInput.shift().split(' ');
    let map = new Map();

    for (let word of newArray) {
        let counter = 0;
        for (let word1 of userInput) {
            if (word == word1) {
                counter++;
            }
        }
        map.set(word, counter);
    }

    let entries = Array
        .from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .forEach(arr => console.log(`${arr[0]} - ${arr[1]}`));
} //100/100
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);