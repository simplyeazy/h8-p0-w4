function cariMedian(arr) {
    // you can only write your code here!
    let mean = 0;
    let arrLen = arr.length;
    if (arr.length % 2 === 0) {
        return mean = (arr[(arrLen / 2) - 1] + arr[(arrLen / 2)]) / 2;
    }
    if (arr.length % 2 !== 0) {
        return mean = arr[Math.floor((arrLen / 2))];
    }
    return -1
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5