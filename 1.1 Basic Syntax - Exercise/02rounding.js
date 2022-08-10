function rounding(number, round) {
    let a = 0;
    if (round > 15) {
        round = 15;
        a = number.toFixed(round);
    } else {
        a = number.toFixed(round);
    }
    console.log(`${parseFloat(a)}`);
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5000, 3);
// 100/100