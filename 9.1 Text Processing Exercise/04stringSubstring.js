function stringSubstring(word, string) { 
    word = word.toLowerCase();
    string = string.split(' ');
    for (let w of string) {
        w = w.toLowerCase();
        if (w == word) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
} // 100/100 weee
stringSubstring('javascript',
    'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');