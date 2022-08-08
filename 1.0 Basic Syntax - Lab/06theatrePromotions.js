function promotions (daytype, age){ 
    let price = 0;
    if (age >= 0 && age <=18){
        switch (daytype) {
            case "Weekday": price = 12; 
                break; 
            case "Weekend": price = 15; 
                break; 
            case "Holiday": price = 5;
            default:
                break;
        }
    } else if (age > 18 && age <= 64){
        switch (daytype) {
            case "Weekday": price = 18; 
                break; 
            case "Weekend": price = 20; 
                break; 
            case "Holiday": price = 12;
            default:
                break;
        }
    } else if (age > 64 && age <= 122){
        switch (daytype) {
            case "Weekday": price = 12; 
                break; 
            case "Weekend": price = 15; 
                break; 
            case "Holiday": price = 10;
            default:
                break;
        }
    } else /*if (age < 0 || age > 122)*/{
        console.log("Error!");
    } 
    if(price > 0){
        console.log(price +'$');
    }
} 
promotions("Holiday" , 15); 
// 100/100