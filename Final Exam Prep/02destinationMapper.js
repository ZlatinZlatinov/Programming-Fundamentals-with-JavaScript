function destinationMapper (inputString) {
    let regexP = /(=|\/)(?<name>[A-Z][a-zA-Z]{2,})\1/g; 
    let matc = inputString.match(regexP);

    if (matc !== null) { 
        let points = 0; newArr = [];
        for (let m of matc) {
            let regex = /(=|\/)(?<name>[A-Z][a-zA-Z]{2,})\1/g; 
            let res = regex.exec(m).groups['name']; 
            newArr.push(res) 
            points += res.length;
        } 
        
        console.log(`Destinations: ${newArr.join(', ')}`); 
        console.log(`Travel Points: ${points}`);
    } else {
        console.log(`Destinations:`); 
        console.log(`Travel Points: 0`);
    }
} // 100/100
destinationMapper(`=Hawai=/Cyprus/=Invalid/=Hawai=invalid==i5valid=/I5valid/=i==/Cyprus/==/Cyprus/=`); 
destinationMapper(`ThisIs some InvalidInput`);