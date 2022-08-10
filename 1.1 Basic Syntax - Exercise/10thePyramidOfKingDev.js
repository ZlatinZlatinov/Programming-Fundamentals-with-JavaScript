function pyramid(blocks, gold) {
    let stone = 0;
    let marble = 0;
    let height = 1;
    let sumbloks = 0;
    for (let x = blocks; x > 0; x -= 2) {
        sumbloks += x * x;
        for (let y = x - 2; y > 0; y -= 2) {
            stone += y * y;
            height++;
            if (y = 1) {
                break;
            }
        }
    } 
    for (let m = blocks; m > 0; m -= 2) {
        //sumbloks += x * x;
        for (let n = m - 2; n > 1; n -= 2) {
            //stone += y * y;
            //height++; 
            //console.log(n);
            if (n = 5) {
                break;
            }
        }
    }   

    stone = Math.round(stone* gold);
    console.log(`Stone required: ${stone}`);
    let totalblocks = sumbloks - blocks + 2;
    marble = Math.round((totalblocks - stone)*gold);
    console.log(`Marble required: ${marble}`);
    let lapiz = (height + 2)*gold;
    console.log(`Lapis Lazuli required: ${lapiz}`);
    console.log(`Gold required: ${Math.round(gold)}`); 
    height = Math.floor(lapiz*gold)
    console.log(`Final pyramid height: ${height}`);
}
pyramid(11, 1); 
// 10/100 - минава само 1вия тест