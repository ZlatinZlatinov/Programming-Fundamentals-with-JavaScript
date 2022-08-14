function arrayRotation(arri, num) {
    let newArray = [];
    for (let k = 0; k < arri.length; k++) {
        newArray.push(arri[k]);
    }
    let rotations = 0;
    while (rotations < num) {
        let masiv = [];
        for (let i = 1; i < newArray.length; i++) {
            masiv.push(newArray[i]);
        }
        masiv.push(newArray[0]);
        newArray = masiv;
        rotations++;
    }
    console.log(newArray.join(" "));
}// ama estestveno ima i gotov metod shift -- murzeli ee
//arrayRotation([51, 47, 32, 61, 21], 2);  
arrayRotation(['Banana', 'Orange', 'Coconut', 'Apple'], 15)
// 100/100 wooo 
// array.shift премахава елемента от масива на нулевия израз и го изрязва от масива 

// e taka: 
function anotherRotation (array, rotations){
    while (rotations > 0){
        let elementToPush = array.shift(); // gotovata komadnda 
        array.push(elementToPush); // ma nqa da e lo6o s nov masiv 
        rotations --; 
    } 
    console.log(array.join(" "));
} 
//anotherRotation([51, 47, 32, 61, 21], 2);