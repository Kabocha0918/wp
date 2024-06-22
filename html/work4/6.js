function gcd(a, b) {

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a); 
}

console.log(gcd(12, 18));     
console.log(gcd(252, 105));

