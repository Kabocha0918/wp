function weekday(str) {
    const weekdays = {
        'Sunday': 0,
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6
    };

    let lowercaseStr = str.toLowerCase().trim();

    if (weekdays.hasOwnProperty(lowercaseStr)) {
        return weekdays[lowercaseStr];
    } else {
        throw new Error('Invalid weekday name');
    }
}

// 測試
console.log(weekday('Sunday'));     
console.log(weekday('friday'));     
