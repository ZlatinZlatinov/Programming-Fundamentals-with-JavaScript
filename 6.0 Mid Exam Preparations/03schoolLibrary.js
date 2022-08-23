function schoolLibrary (userInput) {
    let shelf = userInput.shift().split('&'); 
    
    for (let element of userInput) {
        if (element == 'Done') {
            console.log(shelf.join(', '));
            return;
        } 
        
        let [command, book1, book2] = element.split(' | '); 
        let isIncluded1 = shelf.includes(book1); 
        let isIncluded2 = shelf.includes(book2);
        switch (command) {
            case 'Add Book' : 
            if (!isIncluded1) {
                shelf.unshift(book1);
            } 
            break; 
            case 'Take Book' : 
            if (isIncluded1) {
                let index = shelf.indexOf(book1); 
                shelf.splice(index, 1);
            } 
            break; 
            case 'Swap Books' : 
            if ( isIncluded1 && isIncluded2) {
                let index1 = shelf.indexOf(book1); 
                let index2 = shelf.indexOf(book2); 
                shelf.splice(index1, 1, book2); 
                shelf.splice(index2, 1, book1);
            } 
            break; 
            case 'Insert Book' : 
            if (!isIncluded1) {
                shelf.push(book1);
            } 
            break; 
            case 'Check Book' : 
            let index3 = Number(book1); 
            if (index3 >= 0 && index3 < shelf.length) {
                let name = shelf[index3]; 
                console.log(name);
            }
        }
    }
} // 100 / 100
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"]); 
console.log('-----------------------'); 
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"]);

