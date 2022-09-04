function secretPassword(userInput) {
    let password = userInput.shift();

    for (let line of userInput) {
        if (line == 'Reveal') {
            console.log(`You have a new text message: ${password}`);
            return;
        }

        let [command, value, value1] = line.split(':|:');
        switch (command) {
            case 'InsertSpace':
                value = Number(value);
                password = password.substring(0, value) + ' ' + password.substring(value);
                break;

            case 'Reverse':
                if (password.includes(value)) {
                    let replace = value;
                    value = value.split('').reverse().join('');
                    password = password.replace(replace, '').concat(value);
                } else {
                    console.log('error'); 
                    continue;
                }
                break;

            case 'ChangeAll':
                while (password.includes(value)) {
                    password = password.replace(value, value1);
                }
                break;
        }
        console.log(password);
    }
} //100/100 ama tva e secret Chat we
// secretPassword([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal']);
console.log('++++++++++++');
secretPassword([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);