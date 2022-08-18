function listOfProducts(products) {
    console.log(
        products
            .sort()
            .map((x, i) => `${i + 1}.${x}`)
            .join('\n'));
}
listOfProducts(['Watermelon', 'Banana', 'Apples']); 
// 100/100