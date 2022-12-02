function getCheckDigit(numbersString) {
  let currentCount = 1;
  let doubleValue;
  let computedValue = 0;

  for (let i = numbersString.length - 1; i >= 0; i--) {
    if (currentCount % 2 !== 0) {
      doubleValue = Number(numbersString[i] * 2);
      if (doubleValue > 9) {
        doubleValue -= 9;
      }

      computedValue += doubleValue;
    } else {
      computedValue += Number(numbersString[i]);
    }

    currentCount++;
  }

  return 10 - (computedValue % 10);
}

function checkLuhn(numbersString) {
  let currentCount = 1;
  let doubleValue;
  let computedValue = 0;

  for (let i = numbersString.length - 1; i >= 0; i--) {
    if (currentCount % 2 === 0) {
      doubleValue = Number(numbersString[i] * 2);
      if (doubleValue > 9) {
        doubleValue -= 9;
      }

      computedValue += doubleValue;
    } else {
      computedValue += Number(numbersString[i]);
    }

    currentCount++;
  }

  return computedValue % 10 === 0;
}

// console.log(checkLuhn("9510095783089")); // true
// console.log(checkLuhn("79927398713")); // true
// console.log(checkLuhn("2001014800186")); //false
// console.log(checkLuhn("0710981583")); //false
// console.log(checkLuhn("0187549712")); //true
