function numbersSum(num) {
  if (num <= 1) {
    return num;
  }

  return numbersSum(num - 1) + num;
}

console.log(numbersSum(10));
