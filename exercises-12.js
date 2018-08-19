function shoppingTime(memberId, money) {
    // you can only write your code here!
    let BarangDiBeli = []
    let duitsebelumtransaksi = money
    if (memberId === '') {
        return 'mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }
    else if (money === undefined && memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else {
        while (money > 49999) {
            // switch (money) {
            //     case money >= 1500000:
            //         BarangDiBeli.push('Sepatu Stacattu')
            //         money = money - 1500000
            //         //break;
            //     case money >= 500000:
            //         BarangDiBeli.push("Baju Zoro");
            //         money = money - 500000;
            //         //break;
            //     case money >= 250000:
            //         BarangDiBeli.push("Baju H&N");
            //         money = money - 250000;
            //         //break;
            //     case money >= 175000:
            //         BarangDiBeli.push("Sweater Uniklooh");
            //         money = money - 175000;
            //         //break;
            //     case money >= 50000:
            //         BarangDiBeli.push("Casing Handphone");
            //         money = money - 50000;
            //         break;
            //     default:
            //         break;
            // }

            if (money >= 1500000) {
                BarangDiBeli.push('Sepatu Stacattu')
                money = money - 1500000
            }
            else if (money >= 500000) {
                BarangDiBeli.push('Baju Zoro')
                money = money - 500000
            }
            else if (money >= 250000) {
                BarangDiBeli.push('Baju H&N')
                money = money - 250000
            }
            else if (money >= 175000) {
                BarangDiBeli.push('Sweater Uniklooh')
                money = money - 175000
            }
            else if (money >= 50000) {
                BarangDiBeli.push('Casing Handphone')
                money = money - 50000
                break;
            }
            else {
                break;
            }
        }
        var Objek = {
            memberid: memberId,
            money: duitsebelumtransaksi,
            listPurchased: BarangDiBeli,
            changeMoney: money
        }
    }
    return Objek
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja