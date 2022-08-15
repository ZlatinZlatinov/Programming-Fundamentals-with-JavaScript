function signCheck (numA, numB, numC){ 
    let newArray = [numA, numB, numC];
    let counter = 0; 
    for( let i = 0; i < 3; i++){
        let check = Number(newArray[i]); 
        if (check < 0){ 
            counter++;
        }
    } 
    if (counter == 1 || counter == 3){
        console.log('Negative');
    } else {
        console.log('Positive');
    }
} 
signCheck (5, 12, -15); 
// 100/100 като условието беше да не се умножават 3те числа, 
// за да се разбере дали резултатът ще е пол. или отр.