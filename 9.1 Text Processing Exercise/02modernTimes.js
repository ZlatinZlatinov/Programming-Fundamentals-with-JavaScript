function modernTimes(string) {
    string = string.split(' ');
    for (let word of string) {
        let check = false;
        for (let c = 1; c < word.length; c++) {
            if (((word.charCodeAt(c) >= 65 && word.charCodeAt(c) <= 95) || (word.charCodeAt(c) >= 97 && word.charCodeAt(c) <= 122)) && word[0] == '#') {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (check) {
            console.log(word.slice(1));
        }
    }
} //100/100 
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('----------');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');