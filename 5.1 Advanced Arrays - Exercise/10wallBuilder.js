function wallBuilder (userInput) { 
    let sum = 0; let newArray = [];
    
    while(sum != 30 * userInput.length) { 
        let sum1 = 0; 
        let filtered = userInput.filter( x => x != 30).length * 195; 

        for (let x of userInput) { 
            let index = userInput.indexOf(x); 
            sum1 += x;
            x++; 

            if (userInput[index] == 30) {
                continue;
            } 
            userInput[index] = x;
        }  
         
        newArray.push(filtered);
        sum = sum1;    
    }  

    let junk = newArray.pop(); 
    console.log(newArray.join(', ')); 
    let totalCost = 0; 
    newArray.forEach( x => totalCost += x * 1900); 
    console.log(totalCost, 'pesos');
} // 100/100
wallBuilder([21, 25, 28]); 
wallBuilder([17, 22, 17, 19, 17]); 
wallBuilder([17]);