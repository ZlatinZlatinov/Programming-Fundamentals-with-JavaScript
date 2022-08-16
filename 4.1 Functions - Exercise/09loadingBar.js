function loadingBar(num) {
    let precentage = num / 10; 
    let newArray = []; 
    let a = '%' , b = '.';
    for(let i = 1; i <= 10; i++){
        if ( i <= precentage){
            newArray.push(a);
        } else{
            newArray.push(b);
        }
    } 
    if (num < 100){
    console.log(`${num}% [${newArray.join('')}]`);  
    console.log('Still loading...');
    }  
    if (num == 100){
        console.log(`100% Complete!`); 
        console.log(`[${newArray.join('')}]`);
    }
} 
loadingBar(0); 
loadingBar(100); 
// 100/100