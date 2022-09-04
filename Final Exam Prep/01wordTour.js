function wordTour(inputArray) {
    let string = inputArray.shift();
    
    for (let line of inputArray) {
        if (line == 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${string}`);
            return;
        }

        line = line.split(':');
        let command = line[0], startIndex, endIndex, str;

        switch (command) {
            case 'Add Stop':
                startIndex = Number(line[1]), str = line[2];

                // if (startIndex > -1 && startIndex < string.length) {
                //     let str1 = string.substring(0, startIndex);
                //     let str2 = string.substring(startIndex);
                //     string = `${str1}${str}${str2}`;
                // }
                string = addStop(startIndex, str, string);
                console.log(string);
                break;
            case 'Remove Stop':
                startIndex = Number(line[1]), endIndex = Number(line[2]);
                // let removeStr = string.slice(startIndex, endIndex + 1);

                // if ((startIndex && endIndex) > -1 && (startIndex && endIndex) < string.length) {
                //     string = string.replace(removeStr, '');
                // } 
                string = removeStop(startIndex, endIndex, string);
                console.log(string);
                break;
            case 'Switch':
                let oldString = line[1], newString = line[2];

                // if (string.includes(oldString)) {
                //     string = string.replace(oldString, newString);
                // } 

                string = switchString(oldString, newString, string);
                console.log(string);
                break;
        }
    }

    function addStop(startIndex, str, string) {
        if (startIndex > -1 && startIndex < string.length) {
            let str1 = string.substring(0, startIndex);
            let str2 = string.substring(startIndex);
            return `${str1}${str}${str2}`;
        } else {
            return string;
        }
    }

    function removeStop(startIndex, endIndex, string) {
        let removeStr = string.slice(startIndex, endIndex + 1);
        if ((startIndex && endIndex) > -1 && (startIndex && endIndex) < string.length) {
            return string.replace(removeStr, '');
        } else {
            return string;
        }
    }

    function switchString(oldString, newString, string) {
        if (string.includes(oldString)) {
            return string.replace(oldString, newString);
        } else {
            return string;
        }
    }
} // 100/100 може и с вложени функции
// wordTour(["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]); 

wordTour ([
'Albania:Bulgaria:Cyprus:Deuchland',
'Add Stop:3:Nigeria',
'Remove Stop:4:8',
'Switch:Albania: Azərbaycan',
'Travel']);
