function angkaPrima(angka) {
    // you can only write your code here!
    try {
        if (angka <= 1) {
            return false;
        }
        else if (angka <= 3) {
            return true;
        }
        else if (angka % 2 === 0 || angka % 3 === 0) {
            return false;
        }
        let i = 5;
        while (i * i <= angka) {
            if (angka % i === 0 || angka % (angka + 2 === 0)) {
                return false;
            }
            i = i + 6;
        }
        return true;
    } catch (error) {
        throw error;
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false