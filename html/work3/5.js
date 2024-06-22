function vectorAdd(a, b) {
    if (a.length !== b.length) {
        throw new Error('Vectors must be of the same length');
    }

    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = a[i] + b[i];
    }
    return result;
}

let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(vectorAdd(a, b));  
