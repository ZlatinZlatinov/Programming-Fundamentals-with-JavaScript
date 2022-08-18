function sumFirstAndLast (arrayOfNumbers){
    let first = Number(arrayOfNumbers.shift()); 
    let last = Number(arrayOfNumbers.pop()); 
    console.log(first + last);
} 
sumFirstAndLast(['20', '30', '40']); 
//100/100
