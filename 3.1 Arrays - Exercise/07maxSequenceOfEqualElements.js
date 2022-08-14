function maxSequence(array) {
    let printArray = [];
    let index = 0;

    for (let i = 0; i < array.length - 1; i++) {
        let currentElement = array[i];
        let tempArray = [];

        for (let j = i; j < array.length; j++) {
            let nextElement = array[j];
            if (currentElement == nextElement) {
                tempArray.push(currentElement);
            } else {
                break;
            }
        }

        if (tempArray.length > printArray.length) {
            printArray = tempArray;
        }
    }
    console.log(printArray.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // almost there, but quite not
maxSequence([4, 4, 4, 4]) // 100/100 ma gledah lekciqta