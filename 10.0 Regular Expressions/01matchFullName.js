function matchFullName (input) {
    let regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g; 
    let validNames = [];  
    let valideName = input.match(regExp);

    // while((valideName = regExp.exec(input)) !== null) {
    //     validNames.push(valideName[0]);
    // } 
    console.log(valideName.join(' '));
} // 100/100 siuuuuuu
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');