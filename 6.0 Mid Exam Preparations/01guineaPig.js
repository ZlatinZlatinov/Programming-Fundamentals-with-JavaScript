function guineaPig (userInput) {
    userInput = userInput.map(Number).map(x => x * 1000); 
    let foodGrams = userInput[0]; 
    let hayGrams = userInput[1]; 
    let coverGrams = userInput[2]; 
    let weight = userInput[3]; 
    
    for (let days = 1; days <= 30; days++) { 
        if ((foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) && days < 30){
            console.log('Merry must go to the pet store!'); 
            return;
        }
        foodGrams -= 300;  
        if (days % 2 == 0){
            hayGrams -= (foodGrams * 0.05);
        }  
        if (days % 3 == 0){
            let removeCover = weight / 3; 
            coverGrams -= removeCover; 
        }
    } 

    console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams / 1000).toFixed(2)}, Hay: ${(hayGrams/1000).toFixed(2)}, Cover: ${(coverGrams/1000).toFixed(2)}.`);

} // emm 90/100  сигурно горе в проверката за дните
guineaPig(["10", "5", "5.2", "1"]); 
//guineaPig(["1", "1.5", "3", "1.5"]); 
//guineaPig(["9","5","5.2","1"]);
