function matrixMul(a, b) {
    let m = a.length;
    let p = a[0].length;
    let n = b[0].length;

    if (p !== b.length) {
        throw new Error('Number of columns in the first matrix must be equal to the number of rows in the second matrix');
    }

    let c = new Array(m);
    for (let i = 0; i < m; i++) {
        c[i] = new Array(n).fill(0);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < p; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return c;
}

let a = [
    [1, 2],
    [3, 4],
];
let b = [
    [5, 6],
    [7, 8],
];
console.log(matrixMul(a, b));  
