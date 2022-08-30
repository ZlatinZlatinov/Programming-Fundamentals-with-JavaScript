function revealWords(word, string) {
    string = string.split(' ');
    word = word.split(', '); 
    
    for (let w1 of string) { 
        let index = string.indexOf(w1)
        for (let w2 of word) { 
            //let index = string.indexOf(w1) 
            if (w1.length == w2.length && w1.includes('*')) {
                string[index] = w2;
            }
        }
    }
    console.log(string.join(' '));
} //100/100
revealWords('great',
    'softuni is ***** place for learning new programming languages');
console.log('----------');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'); 
console.log('++++++++++');

function revealWords2 (word, string) {
    word = word.split(', '); 
    for (let w1 of word) {
        string = string.replace('*'.repeat(w1.length), w1);
    } 
    console.log(string);
} // senior way 100/100
revealWords2('great',
    'softuni is ***** place for learning new programming languages');
console.log('----------');
revealWords2('great, learning',
    'softuni is ***** place for ******** new programming languages'); 