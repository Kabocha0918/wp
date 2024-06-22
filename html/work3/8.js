function daysInYear(n) {
    if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
        return 366; 
    } else {
        return 365; 
    }
}

console.log(daysInYear(1991));  
console.log(daysInYear(2004));  
console.log(daysInYear(1900));  
console.log(daysInYear(2000));  
