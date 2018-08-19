function changeMe(arr) {
    // you can only write your code here!
    let storeLiteralHere = []
    for (let i = 0; i < arr.length; i++) {
        var object = {}
        object.firstName = arr[i][0]
        object.lastName = arr[i][1]
        object.gender = arr[i][2]
        if (arr[i][3]) {
            object.age = 2018 - arr[i][3]
        }
        else {
            object.age = 'Invalid Birth Year'
        }
        storeLiteralHere.push(object)
    }
    return console.log(storeLiteralHere)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
//changeMe([]); // ""