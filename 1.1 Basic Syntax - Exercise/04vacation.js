function vacation(peopleCount, type, day) {

    let totalPrice = 0;
    let price = 0;

    if (type === "Students") {
        switch (day) {
            case "Friday": price = 8.45;
                break;
            case "Saturday": price = 9.80;
                break;
            case "Sunday": price = 10.46;
            default: break;
        }
        if (peopleCount >= 30) {
            totalPrice = price * peopleCount * 0.85;
        } else {
            totalPrice = price * peopleCount;
        }
    } else if (type === "Business") {
        switch (day) {
            case "Friday": price = 10.90;
                break;
            case "Saturday": price = 15.60;
                break;
            case "Sunday": price = 16;
            default: break;
        }
        if (peopleCount >= 100) {
            totalPrice = price * (peopleCount - 10);
        } else {
            totalPrice = price * peopleCount;
        }
    } else if (type === "Regular") {
        switch (day) {
            case "Friday": price = 15;
                break;
            case "Saturday": price = 20;
                break;
            case "Sunday": price = 22.50;
            default: break;
        }
        if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice = price * peopleCount * 0.95;
        } else {
            totalPrice = price * peopleCount;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
// 100/100