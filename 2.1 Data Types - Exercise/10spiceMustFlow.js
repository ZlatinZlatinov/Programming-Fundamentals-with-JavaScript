function spices (startingYield){
    let extractedSpices = 0; 
    let dayCounter = 0; 
    while ( startingYield >= 100){
        dayCounter ++; 
        extractedSpices += startingYield - 26; 
        startingYield -= 10;
    }  
    console.log(dayCounter);
    if ( dayCounter != 0){
        extractedSpices -= 26; 
        console.log(extractedSpices);
    } else{
        console.log(extractedSpices);
    }
} 
spices(450); 
// 100/100