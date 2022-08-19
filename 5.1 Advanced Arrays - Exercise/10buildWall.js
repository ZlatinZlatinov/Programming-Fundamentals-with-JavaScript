function buildWall(crews) {
    let counter = 0;
    let newArray = [];

    for (let element of crews) {
        let index = crews.indexOf(element);
        for (let i = element; i < 30; i++) {
            element++
            counter++;
            newArray.push(195);
            //crews = crews.map((x, i = index) => x+1);
        }
        crews[index] = element;
    }
    console.log(newArray.join(', '));
    console.log(`${counter * 195 * 1900} pesos`);
}
//buildWall ([21, 25, 28]); //puk taz edvam 33/100

function test(masiv) {
    //console.log(masiv.map((x) => x+1));  
    masiv[0] = 30;
    console.log(masiv);
}
//test([21, 25, 26]); 

function secondBuilder(arr) {
    let print = []; let concreteAmount = 195; let concreteCost = 1900;
    let filtrator = arr.filter(x => x < 30).map(Number);
    let counter = 0;

    while (filtrator.length > 0) {
        filtrator = filtrator.map(x => x + 1);
        let remover = Number(filtrator.filter(x => x > 30));
        let isIncluded = filtrator.includes(remover);
        let index = filtrator.indexOf(remover);

        if (isIncluded) {
            filtrator.splice(index, 1);
        }
        if (filtrator.length > 0) {
            counter = filtrator.length;
            let sum = concreteAmount * counter;
            print.push(sum);
        }
        if (filtrator.length <= 0) {
            break;
        }
    }
    console.log(print.join(', '));
    let countYards = 0;
    for (let element of print) {
        countYards += Number(element);
    }
    let totalCost = countYards * concreteCost;
    console.log(`${totalCost} pesos`);
}// tva moze i da raboti.. da da ama ne

secondBuilder([21, 25, 30]); 
secondBuilder([30, 30, 24, 30, 27]);
