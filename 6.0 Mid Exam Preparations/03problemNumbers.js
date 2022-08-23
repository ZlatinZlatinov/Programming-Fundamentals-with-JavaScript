function problemNumbers(userInput) {
    let newArray = []; userInput = userInput.split(' ');
    let sum = 0, average = 0, topFive = 5; 
    
    for (let element of userInput) {
        newArray.push(Number(element));
        sum += Number(element);
    }
    average = sum / newArray.length;

    let filtrator = newArray.filter(x => x > average);
    filtrator = filtrator.sort((a, b) => b - a);
    filtrator = filtrator.slice(0, topFive);
    console.log(filtrator.length > 0 ? filtrator.join(' ') : 'No');
}
problemNumbers('10 20 30 40 50');
problemNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
problemNumbers('-1 -2 -3 -4 -5 -6');
problemNumbers('1');
// eeemi 100/100 6toto juj e mazen HOI
