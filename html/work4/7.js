function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

console.log(lcm(12, 18));   
console.log(lcm(48, 18));   
