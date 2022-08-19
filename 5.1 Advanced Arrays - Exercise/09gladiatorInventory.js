function gladiatorInventory(userInput) {
    let inventory = userInput.shift().split(' ');

    for (let element of userInput) {
        element = element.split(' ');
        let command = element[0];
        let equipment = element[1];
        let isIncluded = inventory.includes(equipment);

        switch (command) {
            case 'Buy':
                if (!isIncluded) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (isIncluded) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (isIncluded) {
                    let index = inventory.indexOf(equipment);
                    let pusher = inventory.splice(index, 1);
                    inventory.push(pusher);
                }
                break;
            case 'Upgrade':
                equipment = equipment.split('-');
                let ifContains = inventory.includes(equipment[0]);
                if (ifContains) {
                    let index = inventory.indexOf(equipment[0]);
                    inventory.splice(index + 1, 0, `${equipment[0]}:${equipment[1]}`);
                }

        }
    }
    console.log(inventory.join(' '));
} //100/100
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)