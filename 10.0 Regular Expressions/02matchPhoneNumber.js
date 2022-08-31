function matchPhoneNumber (inputData) { 
    let phoneNumbers = inputData[0];
    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g; // traq da e s \b 
    // moje i v na4aloto da se dobabi (?: |^) za da proverqva predi dumata dali 
    // dali ima interval ili e v na4aloto na stinga, a ?: pravi purvata grupa 
    // (?: |^) da e nonCapturing
    let validPhones = []; 
    let validePhone = phoneNumbers.match(pattern); 
    while ((validePhone = pattern.exec(phoneNumbers)) != null) { 
        let num = validePhone[0];
        validPhones.push(validePhone[0]);
    } 
    console.log(validPhones.join(', '));
} //100/100 nz, to si dava masiv tei ili ina4e
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']); 
console.log('----------'); 
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);