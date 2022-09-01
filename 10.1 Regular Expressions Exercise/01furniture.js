function furniture(inputArray) {
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+|\d+.\d+)!(?<quantity>\d+)\b/g
    let totamoney = 0; let resultArr = [];
    for (let element of inputArray) {
        if (element == 'Purchase') {
            break;
        }
        let matches = element.match(pattern);

        while ((matches = pattern.exec(element)) !== null) {
            let furniture = matches.groups['furniture'];
            resultArr.push(furniture);
            let price = matches.groups['price'];
            let quantity = matches.groups['quantity'];
            totamoney += quantity * price;
        }
    }
    if (resultArr.length == 0) {
        console.log('Bought furniture:');
        console.log(`Total money spend: ${totamoney.toFixed(2)}`);
    } else {
        console.log('Bought furniture:');
        resultArr.forEach(e => console.log(e));
        console.log(`Total money spend: ${totamoney.toFixed(2)}`);
    }
} // 100/100
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);