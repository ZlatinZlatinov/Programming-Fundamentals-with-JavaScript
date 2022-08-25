function storeProvision(productsInStock, productsInOrder) {
    for (let z = 1; z < productsInStock.length; z += 2) {
        productsInStock[z] = Number(productsInStock[z]);
    }
    for (let x = 0; x < productsInOrder.length; x++) {
        let prouct = productsInOrder[x]; x++;
        let count = Number(productsInOrder[x]);
        let isIncluded = productsInStock.includes(prouct);
        if (isIncluded) {
            let index = productsInStock.indexOf(prouct);
            index++;
            let newCount = productsInStock[index] += count;
            productsInStock[index] = newCount;
        } else {
            productsInStock.push(prouct);
            productsInStock.push(count);
        }

    }
    for (let y = 0; y < productsInStock.length; y++) {
        let prod = productsInStock[y]; y++;
        let amount = productsInStock[y];
        console.log(`${prod} -> ${amount}`);
    }
} // 100/100
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
console.log('-----------------------');
// second method: 

function storeProvision2(stoc, ordered) {
    let storedProducts = {};
    for (let x = 0; x < stoc.length; x++) {
        let prouct = stoc[x]; x++;
        let count = Number(stoc[x]);
        storedProducts[prouct] = count;
    }
    for (let y = 0; y < ordered.length; y++) {
        let product = ordered[y]; y++;
        let count = Number(ordered[y]);
        if (!storedProducts.hasOwnProperty(product)) {
            storedProducts[product] = 0;
        }
        storedProducts[product] += count;
    }
    for (let currProd in storedProducts) {
        console.log(`${currProd} -> ${storedProducts[currProd]}`);
    }
} // 100/100 shorter version
storeProvision2(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);