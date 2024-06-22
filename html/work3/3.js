function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// 測試函數，假設 n 為 29
console.log(isPrime(29));  // 輸出: true
console.log(isPrime(15));  // 輸出: false
