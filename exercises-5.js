function ubahHuruf(kata) {
    // you can only write your code here!
    let buffer = "";
    for (let i = 0; i < kata.length; i++) {
        buffer = buffer + String.fromCharCode(kata[i].charCodeAt(0) + 1);
    }
    return buffer;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu