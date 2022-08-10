function login(input) { 
    let username = input[0];
    let password = '' 
    let index = 1; 
    let command = input[index]; 
    index++; 
    let counter = 0;
    for (let i = username.length - 1; i >= 0; i--){
        password += `${username.charAt(i)}`;
    } 
    while (command != password){ 
        counter++; 
        if (counter >= 4){ 
            console.log(`User ${username} blocked!`);
            return;
        } 
        console.log('Incorrect password. Try again.'); 
        command = input[index];
        index++;
    } 
    if (counter > 5){
        console.log(`User ${username} blocked!`); 
        
    } else{
        console.log(`User ${username} logged in.`);
    }
} 
login(['Acer','login','go','let me in','recA']); 
// 100/100