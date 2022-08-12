function gladiatorExpense(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let cost = 0;
    let brokenShield = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            cost += helmetPrice;
        }
        if (i % 3 == 0) {
            cost += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            cost += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 == 0) {
                cost += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`);
}
gladiatorExpense(7, 2, 3, 4, 5); 
// 100/100