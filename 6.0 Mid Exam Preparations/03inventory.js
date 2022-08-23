function inventory (userInput) {
    let items = userInput.shift().split(', '); 
    
    for (let element of userInput) {
        if (element == 'Craft!') {
            console.log(items.join(', ')); 
            return;
        } 
        let [command, item] = element.split(' - '); 
        let isIncluded = items.includes(item); 
        let index1 = items.indexOf(item);
        switch (command) {
            case 'Collect' : 
            if (!isIncluded) {
                items.push(item);
            } 
            break; 
            case 'Drop' : 
            if (isIncluded) {
                items.splice(index1, 1);
            } 
            break; 
            case 'Combine Items' : 
            item = item.split(':'); 
            isIncluded = items.includes(item[0]); 
            if (isIncluded){
                let index = items.indexOf(item[0]); 
                items.splice(index + 1, 0, item[1]);
            } 
            break; 
            case 'Renew' :
            if (isIncluded) {
                let pusher = items.splice(index1, 1); 
                items.push(...pusher);
            } 
            break;
        } 
    }
} // 100/100
// inventory ([
//     'Iron, Wood, Sword', 
//     'Collect - Gold', 
//     'Drop - Wood', 
//     'Craft!'
//   ]
//   ); 
inventory ([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );