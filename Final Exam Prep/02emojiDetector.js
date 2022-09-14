function emojiDetector(input) {
    let string = input[0];
    let regexP = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let regexNum = /\d/g;

    let matchEmoji = string.match(regexP);
    let matchNums = string.match(regexNum);
    let treshhold = matchNums.reduce((a, b) => Number(a) * Number(b));

    console.log(`Cool threshold: ${treshhold}`);
    console.log(`${matchEmoji.length} emojis found in the text. The cool ones are:`);
    for (let match of matchEmoji) {
        let sum = 0;

        for (let x = 2; x < match.length - 2; x++) {
            sum += Number(match[x].charCodeAt(0));
        }
        if (sum >= treshhold) {
            console.log(match);
        }
    }
} // 100/100 qvno ne pravi proverka ako nqma match
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('--------');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
console.log('-----------');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('================');
function emojiDetector(input) {
    let emojiPattern = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g; ///(\:{2}|\*{2})(?:[A-z][a-z]{2,})\1/g;
    let coolPattern = /\d/g;
    let matches = input[0].match(emojiPattern);
    let coolMatches = input[0].match(coolPattern);
    let coolThreshold = coolMatches.reduce((a, b) => Number(a) * Number(b));
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${matches.length} emojis found in the text. The cool ones are:`);
    for (let currEmoji of matches) {
         let totalValue = 0;
        for (let currLetter of currEmoji) {
            if (currLetter !== ':' && currLetter !== '*') {
                let value = Number(currLetter.charCodeAt(0));
                totalValue += value;
            }
        } 
        // for (let x = 2; x < currEmoji.length - 2; x++) {
        //     totalValue += Number(currEmoji[x].charCodeAt(0));
        // }
        if (totalValue >= coolThreshold) {
            console.log(currEmoji);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('--------');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
console.log('-----------');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
