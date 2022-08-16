function charactersInRange(firstChar, secondChar) {
    let start = firstChar.charCodeAt();
    let end = secondChar.charCodeAt();
    let printLine = '';

    if (start < end) {
        for (let i = start + 1; i < end; i++) {
            printLine += `${String.fromCharCode(i)} `;
        }
    }
    if (start > end) {
        for (let i = end + 1; i < start; i++) {
            printLine += `${String.fromCharCode(i)} `;
        }
    }
    console.log(printLine);
}
charactersInRange('C', '#');
// 100/100