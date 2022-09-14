function fancyBarcodes (userInput) { 
    let barcodeCount = Number(userInput.shift());  

    for (let x = 0; x < barcodeCount; x++) {
        let regexP = /(?:@[#]+)(?<product>[A-Z][a-zA-Z0-9]{4,}[A-Z])(?:@[#]+)/g; 
        let line = userInput[x];

        if (line.match(regexP) !== null) {
            let producT = regexP.exec(line).groups['product']; 
            let numregex = /\d/g; 
            let matchNums = producT.match(numregex); 

            if (matchNums !== null) {
                console.log(`Product group: ${matchNums.join('')}`);
            } else {
                console.log('Product group: 00');
            }
            
        }  else {
            console.log('Invalid barcode');
        }
    }
} // seems to work just fine xddd 100/100
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]); 
console.log('-------'); 
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);
