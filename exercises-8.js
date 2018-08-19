function urutkanAbjad(str) {
    // you can only write your code here!
    let strArr = str.toString().split('')
    let temp = '';
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr.length - i; j++) {
            if (strArr[j] > strArr[j + 1]) {
                temp = strArr[j];
                strArr[j] = strArr[j + 1];
                strArr[j + 1] = temp;
            }
        }
    }
    return strArr.join('');

    //or kalau pake builtinfunction yang tidak reliable jadi 
    //return str.toString().split('').sort().join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'