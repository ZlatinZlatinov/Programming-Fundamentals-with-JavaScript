function censoredWords(inputString, word) {
    inputString = inputString.split(word);
    console.log(inputString.join(('*').repeat(word.length)));
} // 100/100 but not the right way
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');