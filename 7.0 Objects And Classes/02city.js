function city (userInput) {
    let cat = Object.keys(userInput); 
    for (let key of cat) {
        console.log(`${key} -> ${userInput[key]}`);
    }
} // 100/100
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});