function sumDigits(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(sum);
}
//sumDigits(245678); 
// 100/100 


function sumDigits2(num) {
    num = num.toString();
    let sum = 0;
    num.split("").forEach(function (char) {
        sum += Number(char);
    });
    console.log(sum);
}
sumDigits2(245678); // works the same way sa upper one look MDN