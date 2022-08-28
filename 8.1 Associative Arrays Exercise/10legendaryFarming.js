function legendaryFarming(userInput) {
    let legendaryObj = {}, normalObj = {};
    userInput = userInput.split(' ');
    for (let x = 0; x < userInput.length - 1; x++) {
        let amount = Number(userInput[x]); x++;
        let item = userInput[x].toLowerCase(); 
        let breaker = false;
        switch (item) {
            case 'shards':
                if (amount >= 250) {
                    amount -= 250;
                    console.log('Shadowmourne obtained!'); 
                    breaker = true;
                }
                legendaryObj[item] = amount;
                break;
            case 'fragments':
                if (amount >= 250) {
                    amount -= 250;
                    console.log('Valanyr obtained!'); 
                    breaker = true;
                }
                legendaryObj[item] = amount;
                break;
            case 'motes':
                if (amount >= 250) {
                    amount -= 250;
                    console.log('Dragonwrath obtained'); 
                    breaker = true;
                }
                legendaryObj[item] = amount;
                break; 
                default : 
                normalObj[item] = amount; 
                break;
        } 
        if (breaker || Number(legendaryObj[item]) >= 250) {
            break;
        }
    }
    console.log(legendaryObj); 
    console.log(normalObj);
    console.log('-----------');
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');