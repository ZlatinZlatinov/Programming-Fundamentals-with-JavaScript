function specialNumbers(num) {
    num = num;  
    let currentchar;
    for( let x = 1; x <= num; x++){
        currentchar = String(x);  
        let sum = 0;
        for(let y = 0; y < currentchar.length; y++){
            sum += Number(currentchar[y]); 
            
        } 
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${currentchar} -> True`);
        } else{
            console.log(`${currentchar} -> False`);
        }
    }
} 
specialNumbers(20); 
// 100/100