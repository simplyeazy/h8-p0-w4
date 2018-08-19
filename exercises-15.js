function changeVocals(str) {
  //code di sini
  var newStr = ''
  for (var i of str) {
    switch (i) {
      case 'a':
        newStr += 'b';
        break;
      case 'i':
        newStr += 'j';
        break;
      case 'u':
        newStr += 'v';
        break;
      case 'e':
        newStr += 'f';
        break;
      case 'o':
        newStr += 'p';
        break;
      case 'A':
        newStr += 'B';
        break;
      case 'I':
        newStr += 'J';
        break;
      case 'U':
        newStr += 'V';
        break;
      case 'E':
        newStr += 'F';
        break;
      case 'O':
        newStr += 'P';
        break;
      default: newStr += i
    }
  }
  return newStr
}

function reverseWord(str) {
  //code di sini
  // let strArr = str.split('');
  // return strArr.reverse().join();
  let reverseString = '';
  for (let j = str.length - 1; j >= 0; j--) {
    reverseString += str[j];
  }
  return reverseString;
}

function setLowerUpperCase(str) {
  //code di sini
  // return str.toLowerCase();
  let lowerUpper = ''
  for (let k = 0; k < str.length; k++) {
    if (str[k] === str[k].toUpperCase()) {
      lowerUpper += str[k].toLowerCase()
    } else {
      lowerUpper += str[k].toUpperCase()
    }
  }
  return lowerUpper
}

function removeSpaces(str) {
  //code di sini
  let removeSpace = ''
  for (let l = 0; l < str.length; l++) {
    if (str[l] === ' ') {
      removeSpace += ''
    } else {
      removeSpace += str[l]
    }
  }
  return removeSpace
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  let changedVocal = changeVocals(name)
  let reversedWord = reverseWord(changedVocal)
  let lowerCasedWord = setLowerUpperCase(reversedWord)
  let spaceRemovedWord = removeSpaces(lowerCasedWord)
  return spaceRemovedWord;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'