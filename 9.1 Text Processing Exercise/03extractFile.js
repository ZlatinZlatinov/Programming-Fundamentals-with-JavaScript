function extractFile(string) {
    string = string.split('\\');
    let name, blin, extension;
    let test = (string[string.length - 1]).split('.');
    if (test.length == 2) {
        [name, extension] = test;
        console.log(`File name: ${name}`);
        console.log(`File extension: ${extension}`);
    } else {
        name = test[0];
        blin = test[1];
        extension = test[2];
        console.log(`File name: ${name + '.' + blin}`);
        console.log(`File extension: ${extension}`);
    }
} //100/100 veeery hardcoded , moje i s lastIndexOf na . i \
extractFile('C:\\Internal\\training-internal\\Template.blin.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');