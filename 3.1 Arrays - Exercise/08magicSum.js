function magicSum(arri, num) {
    for (let k = 0; k < arri.length; k++) {
        let element = arri[k];
        let printline = '';
        for (let i = k + 1; i < arri.length; i++) {
            let element2 = arri[i];
            if ((Number(element) + Number(element2)) == num) {
                printline = `${element} ${element2}`
                console.log(printline);
            }
        }
    }
}
//magicSum([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6) // emm 83 / 100 not that bad 
// pak taka de ama da xdd tup juj 


function test (array){
    let a = array.includes(2);
    console.log(typeof a);
} 
test([1, 2, 3]);