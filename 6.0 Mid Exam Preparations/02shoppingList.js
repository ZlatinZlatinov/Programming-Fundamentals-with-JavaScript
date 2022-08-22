function shoppingList(userInput) {
    let groceryList = userInput.shift().split('!');

    for (let element of userInput) {
        if (element === 'Go Shopping!') {
            break;
        }
        let breaker = false;
        element = element.split(' ');
        let [command, item] = element;
        let isIncluded = groceryList.includes(item);
        let index = groceryList.indexOf(item);
        switch (command) {
            case 'Urgent':
                if (!isIncluded) {
                    groceryList.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (isIncluded) {
                    groceryList.splice(index, 1);
                }
                break;
            case 'Correct':
                if (isIncluded) {
                    let newItem = element[2];
                    groceryList.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (isIncluded) {
                    groceryList.push(...groceryList.splice(index, 1)); // мдаа мноо кат са тарикатиш тей стаа, 
                } // да знаиш др път че така са пиши с 3 точки
                break;
            default:
                breaker = true;
                break;
        }
        if (breaker) {
            break;
        }
    }
    console.log(groceryList.join(', '));
} // ае 100/100 // ама може да пробвам с вложени функции
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    /*"Go Shopping!",*/
    "Urgent Tomatoes",
    "Rearrange Break"]);
console.log('-.-.-.-.-.-.-.-.-.=-=-=-=-=-=-=-');
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]); 

function test (){
    let arr = [1, 2, 3, 4, 5, 6]; 
    arr.push(...arr.splice(1,1)); 
    console.log(arr);
} 
//test(); 

function shopingList(input) {

    let groceries = input.shift().split('!');
    let line = input.shift();

    while (line != 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');

        switch (command) {
            case 'Urgent':
                urgent(groceries, item);
                break;
            case 'Unnecessary':
                unnecessery(groceries, item);
                break;
            case 'Correct':
                correct(groceries, item, newItem);
                break;
            case 'Rearrange':
                rearrange(groceries, item);
                break;
            default: break; // needs to include default case for invalid command('Gosho'), otherwise will not break
        }
        line = input.shift();
    }

    console.log(groceries.join(', '));

    function urgent(list, item) {
        if (list.includes(item) == false) {
            list.unshift(item);
        }
    }

    function unnecessery(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    function correct(list, item, newItem) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list[index] = newItem;
        }
    }

    function rearrange(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            // splice and push can not be chained, otherwise will not include removed item at end of list
            list.splice(index, 1);
            list.push(item);
        }
    }
}
