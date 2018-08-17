function checkAB(num) {
    // you can only write your code here!
    for (let i = 1; i <= num.length; i++) {
        if (num[i] === 'a') {
            for (let j = 1; j <= i + 4; j++) {
                if (num[j] === 'b') {
                    return true;
                }
            }
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false