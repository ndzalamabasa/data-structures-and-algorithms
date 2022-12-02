const luhn = (number) => {
  const numString = number.toString();
  const reversedString = numString.split('').reverse();
  let luhnCheck = [];

  reversedString.forEach((num, index) => {
    if (index % 2 !== 0) {
      num = multiplyByTwo(num);

      if (num > 9) {
        num -= 9;
      }
    }
    luhnCheck.push(parseInt(num));
  });

  const numbersSum = luhnCheck.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return numbersSum % 10 === 0;
};

function multiplyByTwo(number) {
  return number * 2;
}

console.log(luhn(9309145737083));
