function gradient(f, p) {
    const h = 1e-10; 

    let grad = [];

    for (let i = 0; i < p.length; i++) {
       
        let dp = p.slice(); 
        dp[i] += h;

        let derivative = (f(dp) - f(p)) / h;

        grad.push(derivative);
    }

    return grad;
}

function testFunction(p) {
    // 例如 f(x, y) = x^2 + 2y^2
    let x = p[0];
    let y = p[1];
    return x * x + 2 * y * y;
}

let point = [1, 2];
console.log(gradient(testFunction, point)); 
