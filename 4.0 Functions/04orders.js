function orders(order, amount) {
    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;
    let result = 0;
    switch (order) {
        case 'water': result = waterPrice * amount;
            break;
        case 'coffee': result = coffeePrice * amount;
            break;
        case 'coke': result = cokePrice * amount;
            break;
        case 'snacks': result = snacksPrice * amount;
            break;
        default:
            break;
    }
    console.log(result.toFixed(2));
}
orders("water", 5); 
// 100/100