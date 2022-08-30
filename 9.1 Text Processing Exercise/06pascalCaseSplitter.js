function pascalCaseSplitter(string) {
    string = string + 'L';
    let newArr = [];
    let word = string[0];
    for (let x = 1; x < string.length; x++) {
        let currChar = string[x];
        if (currChar.toUpperCase() !== currChar) {
            word = word.concat(currChar);
        } else {
            newArr.push(word);
            word = string[x];
        }
    }
    console.log(newArr.join(', '));
} // 100/100, cheated ofc
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');