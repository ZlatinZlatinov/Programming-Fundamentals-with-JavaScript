function rosettaStone(array) {
    let matrix = array.slice();
    let templateLength = Number(matrix.shift());
    let templateMatrix = matrix
        .splice(0, templateLength)
        .map((row) => row.split(" ").map((x) => Number(x)));
    matrix = matrix.map((row) => row.split(" ").map((x) => Number(x)));

    for (let matrixRow = 0; matrixRow < matrix.length; matrixRow += templateLength) {
        for (let matrixCol = 0; matrixCol < matrix.length; matrixCol += templateMatrix[0].length) {
            for (let templateMatrixRow = 0; templateMatrixRow < templateLength; templateMatrixRow++) {
                for (let templateMatrixCol = 0; templateMatrixCol < templateMatrix[0].length; templateMatrixCol++) {

                    let code = 0;

                    if (matrixCol + templateMatrixCol > matrix.length - 1 || matrixRow + templateMatrixRow > matrix.length - 1) {
                        continue;
                    } else {
                        code = matrix[matrixRow + templateMatrixRow][matrixCol + templateMatrixCol] + templateMatrix[templateMatrixRow][templateMatrixCol];
                        let currentSymbol = getLetter(code);
                        matrix[matrixRow + templateMatrixRow].splice(matrixCol + templateMatrixCol, 1, currentSymbol);
                    }
                }
            }
        }
    }

    function getLetter(code) {
        let num = code;
        if (code > 26) {
            num = code % 27;
        }
        let letter = " ";
        if (num > 0) {
            letter = String.fromCharCode(num + 64);
        }

        return letter;
    }

    let res = [];
    matrix
        .map((el) => {
            res.push(el.join(""));
        })
        .join("");
    console.log(res.join("").trim());
} // js array edvanced more exercise
rosettaStone([
    "2",
    "59 36",
    "82 52",
    "4 18 25 19 8",
    "4 2 8 2 18",
    "23 14 22 0 22",
    "2 17 13 19 20",
    "0 9 0 22 22",
]);