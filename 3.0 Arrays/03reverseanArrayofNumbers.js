function reverseanArrayofNumbers(num, arrayey) {
    let prinLine = '';
    for (let i = num - 1; i >= 0; i--) {
        prinLine += `${arrayey[i]} `;
    }
    console.log(prinLine);
}
reverseanArrayofNumbers(3, [10, 20, 30, 40, 50]);
// 100/100