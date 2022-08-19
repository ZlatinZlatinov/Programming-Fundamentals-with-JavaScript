function sortByCriteria(userInput) {
    
    userInput = userInput.sort(function (a, b) {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        return 0;
    }); 
    userInput = userInput.sort((a, b) => a - b);
    console.log(userInput.join('\n'));
}
//sortByCriteria(['alpha', 'beta', 'gamma']);
//sortByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// this is how to sort an ... not quite there
function test(array) {
    array.sort(function (a, b) {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        return 0;
    });
    console.log(array);
}
//test(['alpha', 'beta', 'gamma']); 

function test2 (masiv){ 
    masiv = masiv.sort();
    masiv = masiv.sort((a, b) => a.length - b.length); 
    console.log(masiv.join('\n'));
} // eeemi tva raboti xdd 100/100
test2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']); 

