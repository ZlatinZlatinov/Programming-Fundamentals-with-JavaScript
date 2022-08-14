function ladybugs (randomInput){
    let newArray = []; let length = randomInput[0];
    for (let i = 0; i < length; i++){
        newArray.push(0);
    }  
    let randomArray = []; 
    for (let x = 0; x < 20; x++){
        randomArray.push(0);
    }
    let positions = randomInput[1];  
    positions.split('');  
    let indexOfPosition = [];
    //console.log(positions); 
    for (let j = 0; j < length; j++){
        let currentPosition = positions[j]; 
        if (currentPosition != ' '){ 
            currentPosition = Number(currentPosition);
            indexOfPosition.push(currentPosition);
        } 
        
    }   
    for ( let k = 0; k < indexOfPosition.length; k++){
        let element = newArray[k]; 
        element++; 
        newArray[k] = element;
    }
    console.log(indexOfPosition);
    console.log(newArray);
   // eemi do tuka samo pokazahme na koi indeksi ima kalinki  
   // gg tva dolu traash
   let index;//randomInput[2]; 
   let masivTam = []; 
   for (let m = 2; m < randomInput.length; m++){
       index = randomInput[m]; 
       index.split(' ');  
       //console.log(index.length);
       for (let n = 0; n < index.length; n++){
           let element = index[n]; 
           if (element != ' '){
            masivTam.push(element); 
           } else if ( element === ' '){
               masivTam.push(' ');
           }
       } 
       //masivTam.push(index); 
       //console.log(masivTam.join(' : '));
   } 
   console.log(masivTam.join(' : '));
} 
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
)