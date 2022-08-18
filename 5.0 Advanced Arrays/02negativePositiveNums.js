function negativePositiveNums(arrayOfNumbers){
    let newArray = []; 
    for(let element of arrayOfNumbers){
        if(Number(element) >= 0){
            newArray.push(Number(element));
        } else{
            newArray.unshift(Number(element));
        } 
    } 
    console.log(newArray.join('\n'));
} 
negativePositiveNums(['7', '-2', '8', '9']); 
// 100/100