function addAndSubstract(arri) {
    let oldSum = 0,
        newSum = 0;
    let newArray = [];
    for (let i = 0; i < arri.length; i++) {
        let currentNum = arri[i];
        if (currentNum % 2 == 0) {
            let pusher = currentNum + i;
            newArray.push(pusher);
        } else {
            let pusher = currentNum - i;
            newArray.push(pusher);
        }
        oldSum += arri[i];
    }
    for (let element of newArray) {
        newSum += element;
    }
    console.log(`[ ${newArray.join(", ")} ]`);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]); 
// 100/100 mursen judge xdd

function test() {
    let firstArray = [1, 2, 3, 4, 5];
    let secondArray = [];
    secondArray.push(firstArray[1]);
    console.log(secondArray);
}
//test();