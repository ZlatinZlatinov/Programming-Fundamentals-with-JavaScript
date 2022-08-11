function echoType(something) {
    console.log(typeof (something));
    let res = typeof (something);
    if (res === "string" || res === "number") {
        console.log(something);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType(null); 
// 100/100