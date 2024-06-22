function matrixAdd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
        throw new Error('Matrices must have the same dimensions');
    }

    let rows = a.length;
    let cols = a[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }

    return result;
}

let a = [
    [1, 2, 3],
    [4, 5, 6],
];
let b = [
    [7, 8, 9],
    [10, 11, 12],
];
console.log(matrixAdd(a, b));  
