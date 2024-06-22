function filter(a, f) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}


let arr = [1, 2, 3, 4];
let filtered = filter(arr, function(x) { return x % 2 === 1; });
console.log(filtered);  
