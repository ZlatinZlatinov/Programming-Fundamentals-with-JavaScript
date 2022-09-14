function mirrorWords(userInput) {
    let string = userInput[0]; 

    let regex = /(\@|\#)(?<wordA>[a-zA-Z]{3,})\1{2}(?<wordB>[a-zA-Z]{3,})\1/g; 
    let match = string.match(regex); 
    if (match == null) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        let wordsCount = match.length; 
        let arr = []; 
        for (let element of match) {
            let regex1 = /(\@|\#)(?<wordA>[a-zA-Z]{3,})\1{2}(?<wordB>[a-zA-Z]{3,})\1/g; 
            let wordA = regex1.exec(element).groups['wordA']; 
            let regex2 = /(\@|\#)(?<wordA>[a-zA-Z]{3,})\1{2}(?<wordB>[a-zA-Z]{3,})\1/g; 
            let wordB = regex2.exec(element).groups['wordB']; 
            let check = wordA.split('').reverse().join(''); 
            if (check === wordB) {
                arr.push(`${wordA} <=> ${wordB}`);
            }
        } 
        console.log(`${wordsCount} word pairs found!`); 
        if (arr.length < 1) {
            console.log('No mirror words!');
        } else {
            console.log('The mirror words are:'); 
            console.log(arr.join(', '));
        }
    }
} // 100/100 suiii
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']); 
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']); 
