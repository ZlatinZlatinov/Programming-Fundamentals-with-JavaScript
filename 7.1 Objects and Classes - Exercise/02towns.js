function towns (userInput) {
    let city = {} 
    for (let element of userInput) { 
        let [townName, townLat, townLong] = element.split(' | ');
        city.town = townName; 
        city.latitude = Number(townLat).toFixed(2); 
        city.longitude = Number(townLong).toFixed(2); 
        console.log(city);
    }
} // 100/100
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);