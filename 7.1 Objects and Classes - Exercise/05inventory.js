function inventory (userInput) { 
    let newObj = {};  let newArr = [];
    for (let element of userInput) {
        let [heroName, heroLevel, heroItems] = element.split(' / '); 
        newObj = {
            name : heroName, 
            level : Number(heroLevel), 
            items : heroItems
        } 
        newArr.push(newObj);
    } 
    let min = Number.MAX_SAFE_INTEGER;
    newArr.sort((a,b) => {
        return a.level - b.level;
    }) 
    newArr.forEach( hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    })
} // 100/100
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );