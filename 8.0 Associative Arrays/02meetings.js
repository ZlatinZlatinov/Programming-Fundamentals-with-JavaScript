function meetings(userInput) {
    let newObject = {}; 
    for (let line of userInput) {
        let [day, name] = line.split(' ');  
        if (newObject.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            newObject[day] = name; 
            console.log(`Scheduled for ${day}`);
        }
    } 
    for (let key of Object.keys(newObject)) {
        console.log(key, '->', newObject[key]);
    }
} //100/100 
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
); 
console.log('-----------------'); 
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);