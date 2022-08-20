function computerStore(userInput) {
    let sum = 0, taxes = 0.2, discount = 0.1;
    let index = 0; let price = 0;// Number(userInput[index]);
    while (typeof price == Number) {
        price = Number((userInput[index]));
        //index++; 
        if (price !== ('special' || 'regular')) {
            if (Number(price) > 0) {
                sum += Number(price);
            } else {
                console.log('Invalid price!');
            }

        } //else{ 
        //     sum = 0;
        //     break;
        // } 

        index++;
    }
    if (sum == 0) {
        console.log('Invalid order!');
        return;
    }
    taxes *= sum;
    let finalprice = 0
    if (price === 'special') {
        discount *= (taxes + sum);
        finalprice = (sum + taxes) - discount;
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`);
        console.log(`Total price: ${finalprice.toFixed(2)}$`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`);
        console.log(`Total price: ${(sum + taxes).toFixed(2)}$`);
    }
} // e tva ne ba4ka hubavo oti while e 4upen
// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ]
//     ); 
// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ]);
//computerStore(['regular']); 

function newTest(userInput) {
    let sum = 0, taxes = 0.2, discount = 0.1;
    let price = 0; let clientType = '';

    for (let element of userInput) {
        if (element === 'special' || element === 'regular') { 
            clientType = element;
            break;
        }
        if (Number(element) > 0) {
            sum += Number(element);
        } else {
            console.log('Invalid price!');
        }
    }

    if (sum == 0) {
        console.log('Invalid order!');
        return;
    }

    taxes *= sum;
    let finalprice = 0
    if (clientType === 'special') {
        discount *= (taxes + sum);
        finalprice = (sum + taxes) - discount;
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`);
        console.log(`Total price: ${finalprice.toFixed(2)}$`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`);
        console.log(`Total price: ${(sum + taxes).toFixed(2)}$`);
    }
} 
newTest([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]); 
newTest(['regular']); 
// 100/100