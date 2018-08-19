function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let hasilBagi;
    let arr = [];
    let arrString = '';
    let result = 0;

    for (var i = 1; i <= angka; i++) {
        hasilBagi = angka / i;
        arrString = i.toString() + hasilBagi.toString();
        if (hasilBagi % 1 === 0) {
            arr.push(arrString);
            if (result === 0) {
                result = arrString.length;
            } else {
                if (result > arrString.length) {
                    result = arrString.length;
                }
            }
        }
    }
    return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2