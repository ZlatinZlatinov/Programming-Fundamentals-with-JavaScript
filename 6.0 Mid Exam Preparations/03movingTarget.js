function movingTarget(userInput) {
    let tatgetsHp = userInput.shift().split(' ').map(Number);

    for (let element of userInput) {
        if (element == 'End') {
            console.log(tatgetsHp.join('|'));
            return;
        }

        let [command, index, value] = element.split(' ');
        index = Number(index), value = Number(value);
        switch (command) {
            case 'Shoot':
                if (index >= 0 && index < tatgetsHp.length) {
                    tatgetsHp[index] -= value;
                    if (tatgetsHp[index] <= 0) {
                        let spliceIndex = tatgetsHp.indexOf(tatgetsHp[index]);
                        tatgetsHp.splice(spliceIndex, 1);
                    }
                }
                break;
            case 'Add':
                if (index >= 0 && index < tatgetsHp.length) {
                    tatgetsHp.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let radius = value;
                if (index >= 0 && index < tatgetsHp.length) {
                    if ((index - radius) >= 0 && (index + radius) < tatgetsHp.length) {
                        let start = index - radius, end = index + radius;
                        tatgetsHp.splice(start, end);
                    } else {
                        console.log('Strike missed!');
                    }
                } else { 
                    console.log('Strike missed!');
                }
        }
    }
} // emm 80/100
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
console.log(`---------------------`);
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);

function test() {
    let array = [1, 2, 3, 4, 5];
    array.splice(5, 0, 8);
    console.log(array);
}
test();

