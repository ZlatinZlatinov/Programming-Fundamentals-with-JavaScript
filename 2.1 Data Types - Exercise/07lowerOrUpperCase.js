function lowerUpper (letter){
    let code = letter.charCodeAt(0); 
    if (code >= 65 && code <= 90){
        console.log('upper-case');
    } else{
        console.log('lower-case');
    }
} 
lowerUpper('l'); 
// 100/100 
// може и с .toUpperCase и после с иф проверка се сравнява или с тернарен оператор