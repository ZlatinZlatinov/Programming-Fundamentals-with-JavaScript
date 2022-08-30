function passwordGenerator(input) {
    let [stringA, stringB, replacementString] = input;
    let string = stringA.concat(stringB); //dobaveno
    let arr1 = [], /*arr2 = [],*/ counter = 1;
    replacementString = replacementString.split('');
    let vowel = ['a', 'o', 'u', 'e', 'i'];

    for (let char of string) {
        if (counter > replacementString.length) {
            counter -= replacementString.length;
        }
        if (vowel.includes(char)) {
            arr1.push(replacementString[counter - 1].toUpperCase());
            counter++;
        } else {
            arr1.push(char);
        }
        // switch (char) {
        //     case 'a':

        //     case 'o':

        //     case 'u':

        //     case 'e':

        //     case 'i':
        //         arr1.push(replacementString[counter - 1].toUpperCase());
        //         counter++;
        //         break;
        //     default:
        //         arr1.push(char);
        //         break;
        // }
    }
    console.log(`Your generated password is ${arr1.reverse().join('')}`);
    // for (let char of stringB) {
    //     if (counter > replacementString.length) {
    //         counter -= replacementString.length;
    //     }
    //     switch (char) {
    //         case 'a':

    //         case 'o':

    //         case 'u':

    //         case 'e':

    //         case 'i':
    //             arr2.push(replacementString[counter - 1].toUpperCase());
    //             counter++;
    //             break;
    //         default:
    //             arr2.push(char);
    //             break;
    //     }
    // }
    // arr1 = arr1.reverse();
    // arr2 = arr2.reverse();
    // let password = (arr2.concat(arr1)).join('');
    // console.log(`Your generated password is ${password}`);
} // 100/100
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange']);
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);
console.log('---------');

function passwordGenerator2(input) {
    let [stringA, stringB, replacementString] = input;
    let string = stringA.concat(stringB); 
    replacementString = replacementString.split(''); 

    let arr1 = [], counter = 1;
    let vowels = ['a', 'o', 'u', 'e', 'i'];

    for (let char of string) {
        if (counter > replacementString.length) {
            counter -= replacementString.length;
        }
        if (vowels.includes(char)) {
            arr1.push(replacementString[counter - 1].toUpperCase());
            counter++;
        } else {
            arr1.push(char);
        }
    }
    console.log(`Your generated password is ${arr1.reverse().join('')}`);
} // 100/100 senior style xdd
passwordGenerator2(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator2(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator2(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);