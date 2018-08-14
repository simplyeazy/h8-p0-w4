function cariModus(arr) {
    // you can only write your code here!
    let freq = 0;
    let maxFreq = 0;
    let modus = 0;
    let sameNum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                freq++;
                if (freq > maxFreq) {
                    maxFreq = freq;
                    modus = i;
                }
            }
        }
    }
    if (modus === 0) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        sameNum = sameNum + arr[i];
        if (sameNum / arr.length === arr[i]) {
            return -1;
        }
    }
    return arr[modus];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1