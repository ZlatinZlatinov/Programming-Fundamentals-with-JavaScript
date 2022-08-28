function travelTime(userInput) {
    let map = new Map(); let newMap = new Map();
    for (let line of userInput) {
        let [country, city, price] = line.split(' > ');
        if (map.has(country) == false) {
            newMap.set(city, price);
            map.set(country, newMap);
        } else {
            if (newMap.has(city) == false) {
                newMap.set(city, price)
            } else {
                let newPrice = price; 
                if (Number(newMap.get(city)) > price) {
                    newMap.set(city, newPrice);
                } else {
                    newMap.set(city, price)
                }
            }  // check if newmap has citty or not... idk
            map.set(country, newMap);
        }
        //map.set(country, newMap);
    }
    let entry = Array.from(map.entries()).forEach(([a, b]) => console.log(b));
    //let entry2 = Array.from(newMap.entries()).forEach(([a,b]) => console.log(a, b));

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log('----------');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);