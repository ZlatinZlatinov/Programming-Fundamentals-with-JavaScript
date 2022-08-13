function reverseInPlace(arrayey) {
    let prinLine = '';
    for (let i = arrayey.length - 1; i >= 0; i--) {
        prinLine += `${arrayey[i]} `
    }
    console.log(prinLine);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']); 
// 100/100