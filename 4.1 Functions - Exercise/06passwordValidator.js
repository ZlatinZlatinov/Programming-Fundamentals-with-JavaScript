function passwordValidator(pass) {
    let check = false;
    let digitCounter = 0;
    let singCounter = 0;

    if (pass.length >= 6 && pass.length <= 10) {
        check = true;
    } else {
        check = false;
        console.log(`Password must be between 6 and 10 characters`);
    }

    for (let element of pass) {
        let code = element.charCodeAt();
        if (code >= 65 && code <= 90) {
            check = true;
        } else if (code >= 97 && code <= 122) {
            check = true;
        } else if (code >= 48 && code <= 57) {
            digitCounter++;
        } else {
            singCounter++;
            check = false; 
            break;
        }
        if (digitCounter >= 2) {
            check = true;
        } else {
            check = false;
        }
    }
    if (singCounter > 0) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
    }
    if (check) {
        console.log('Password is valid');
    }
} // almost there 85/100 annndd third try 100/100 maa moe  sa izmislqt o6te trikove
passwordValidator('logIn');
console.log('-------------------------------');
passwordValidator(`MyPass123`);
console.log('-------------------------------');
passwordValidator('Pa$sss'); 
// ppc tva sig tra sa naprai s otdelni funkcii oti tva mn dulgo 
// ne bih kazal 4e e 100% vqrno xdd 
