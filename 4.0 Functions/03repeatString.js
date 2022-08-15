function repeatString ( randomString, repeats){ 
    let printLine = '';
    for (let i = 0; i < repeats; i++){
        printLine +=`${randomString}`
    } 
    console.log(printLine);
} // moje i s masiv
//repeatString("abc", 3); 
// 100/100 

// 2nd try : 
// ae mojee i da stani ako izvikwame funkciq sama v sebesi;
function repeat(someString, repeats){
    let printLine = ''; 
    printLine += `${someString}`; 
    console.log(printLine);
    if (repeats > 0){repeat(repeats--);}  
    
    
} 
repeat('abc', 3);