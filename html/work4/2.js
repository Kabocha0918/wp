function arrayMin(a) {
    if (a.length === 0) {
        throw new Error('Array must not be empty');
    }

    return a.reduce((min, current) => {
        return (current < min) ? current : min;
    }, a[0]);
}


console.log(arrayMin([5, 3, 9, 1, 7]));    
console.log(arrayMin([10, 20, 30, 5]));   


