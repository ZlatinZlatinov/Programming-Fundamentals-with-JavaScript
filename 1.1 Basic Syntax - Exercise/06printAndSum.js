function printAndSum(numA, endNum) { 
    let sum = 0; 
    let printLine = '';
    for(let i = numA; i <= endNum; i++){
        sum +=i; 
        printLine += `${i} `; 
    } 
    console.log(printLine);
    console.log(`Sum: ${sum}`);
} 
printAndSum(5, 10); 
// 100/100