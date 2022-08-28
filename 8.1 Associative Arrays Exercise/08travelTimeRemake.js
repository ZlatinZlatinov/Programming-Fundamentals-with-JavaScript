function travelTimeRemake(inputArray) {
    inputArray.sort((a,b) => a.localeCompare(b));
    let countryObject = {};

    for (let line of inputArray) {
        let [country, city, price] = line.split(' > ');
        let cityObject = {}; price = Number(price);

        if (countryObject.hasOwnProperty(country) == false) {
            cityObject[city] = price;
            countryObject[country] = cityObject;
        } else { 

            if (countryObject[country].hasOwnProperty(city) == false) {
                cityObject[city] = price;
                countryObject[country][city] = price;
            } else {
                if (countryObject[country][city] > price) {
                    countryObject[country][city] = price;
                }
            }
        }
    }
    let entries = Object.entries(countryObject);

    for (let [country, obj] of entries) {
        let cityEntries = Object.entries(obj).sort((a, b) => a[1] - b[1]);
        let printLine = ''; 
        
        for (let [city, price] of cityEntries) {
            printLine += `${city} -> ${price} `
        }
        console.log(`${country} -> ${printLine.trim()}`);
    }
} // 100/100 пак тряаше с localeCompare
travelTimeRemake([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);
console.log('------');
travelTimeRemake([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']);