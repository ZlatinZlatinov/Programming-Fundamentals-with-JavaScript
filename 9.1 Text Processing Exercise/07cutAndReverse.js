function cutAndReverse (string) {
    let half = string.length / 2 ; 
    let arr1 = [], arr2 = [], counter = 0; 
    for (let char of string) {
        counter++; 
        if( counter >= half+1) {
            arr2.unshift(char); 
            
        } else {
            arr1.unshift(char);
        }
    } 
    console.log(arr1.join('')); 
    console.log(arr2.join(''));
} // lmao 100/100
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT'); 
console.log('--------'); 
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');