function softuniBarIncome(inputArray) {
    let totalprice = 0; 

    for (let element of inputArray) {
        if (element == 'end of shift') {
            break;
        } 

        let namePattern = /%(?<name>[A-Z][a-z]+)%/g;
        let productPattern = /<(?<product>\w+)>/g;
        let countPattern = /\|(?<count>\d+)\|/g;
        let pricePattern = /(?<price>\d+|\d+\.\d+)\$/g;   

        let name = namePattern.exec(element);
        let product = productPattern.exec(element);
        let count = countPattern.exec(element);
        let price = pricePattern.exec(element); 

        if (name && product && count && price) {
            let p = Number(price.groups['price']);
            let c = Number(count.groups['count']);
            totalprice += (c * p);
            console.log(`${name.groups['name']}: ${product.groups['product']} - ${(c * p).toFixed(2)}`);

        } else {
            continue;
        }
    } 
    console.log(`Total income: ${totalprice.toFixed(2)}`);
} // 100/100 almooost xdd  [^|$%.]*? може и да го има ама може и да го нема xdd
softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);