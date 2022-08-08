function sumOddnums (num){
    let a = 0; 
    let counter = 0;
    for (let i = 1; counter < num; i+=2){ 
        counter++;
        console.log(i); 
        a+=i;
    } 
    console.log(`Sum: ${a}`);
} 
sumOddnums(5); 
// 100/100