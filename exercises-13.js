function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],['Baju Zoro', 500000, 2],['Sweater Uniklooh', 175000, 1]];
    let shoeBuyerName = [];
    let shirtBuyerName = [];
    let sweaterBuyerName = [];
    let shoeIncome = 0, shirtIncome = 0, sweaterIncome = 0;
    if (shoppers.length < 1) {
        return shoppers;
    }
    for (let j = 0; j < shoppers.length; j++) {
        if (shoppers[j]['product'] === 'Sepatu Stacattu') {
            if (listBarang[0][2] - shoppers[j]['amount'] >= 0) {
                listBarang[0][2] = listBarang[0][2] - shoppers[j]['amount'];
                shoeIncome = shoeIncome + (shoppers[j]['amount'] * 1500000);
                shoeBuyerName.push(shoppers[j].name);
            }
        }
        else if (shoppers[j]['product'] === 'Baju Zoro') {
            if (listBarang[1][2] - shoppers[j]['amount'] >= 0) {
                listBarang[1][2] = listBarang[1][2] - shoppers[j]['amount'];
                shirtIncome = shirtIncome + (shoppers[j]['amount'] * 500000);
                shirtBuyerName.push(shoppers[j].name);
            }
        }
        else if (shoppers[j]['product'] === 'Sweater Uniklooh') {
            if (listBarang[2][2] - shoppers[j]['amount'] >= 0) {
                listBarang[2][2] = listBarang[2][2] - shoppers[j]['amount'];
                sweaterIncome = sweaterIncome + (shoppers[j]['amount'] * 175000);
                sweaterBuyerName.push(shoppers[j].name);
            }
        }
    }

    let object = [{
        product: 'Sepatu Stacattu',
        shoppers: shoeBuyerName,
        leftOver: listBarang[0][2],
        totalProfit: shoeIncome
    },
    {
        product: 'Baju Zoro',
        shoppers: shirtBuyerName,
        leftOver: listBarang[1][2],
        totalProfit: shirtIncome
    },
    {
        product: 'Sweater Uniklooh',
        shoppers: sweaterBuyerName,
        leftOver: listBarang[2][2],
        totalProfit: sweaterIncome
    }]
    return object;

}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]