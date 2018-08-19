function makanTerusRekursif(waktu) {
    // you can only write your code here!
    if (waktu.length === 0) {
        return "data tidak ada";
    }
    if (waktu===0) {
        return 0;
    }
    if (waktu <= 15) {
        return 1;
    }
    else {
        let sisa = waktu - 15;
        return 1 + makanTerusRekursif(sisa);
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0