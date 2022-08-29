function countingStringOccurances(string, word) {
    string = string.split(' ');
    let counter = 0;
    for (let w of string) {
        if (w == word) {
            counter++;
        }
    }
    console.log(counter);
} // also 100/100
countingStringOccurances('This is a word and it also is a sentence', 'is');
countingStringOccurances('softuni is great place for learning new programming languages',
    'softuni');