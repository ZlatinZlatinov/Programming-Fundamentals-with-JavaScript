function centuriesToMinutes(cenuty) {
    let years = cenuty * 100;  
    let days = Math.trunc(years * 365.2422); 
    let hours = days * 24; 
    let minutes = hours*60; 
    console.log(`${cenuty} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
} 
centuriesToMinutes(5); 
// 100/100 using the Math.trunc method - връща само цялото число като изрязва чаастта след десетичната запетая