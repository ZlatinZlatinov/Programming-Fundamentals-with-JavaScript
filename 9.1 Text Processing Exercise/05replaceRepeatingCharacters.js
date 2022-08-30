function replaceRepeatingCharacters (string) { 
    let newArr = [];
    for (let x = 0; x < string.length; x ++) {
        let char1 = string[x];  
        let char2 = string[x + 1]; 
        if (char1 != char2) {
            newArr.push(char1); 
        }
    } 
    console.log(newArr.join(''));
} // 100/100
replaceRepeatingCharacters('aaaaabbbbbcdddeeeedssaa');  
console.log('-----------');
replaceRepeatingCharacters('qqqwerqwecccwd');