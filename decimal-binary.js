function decToBin(decimalNumber, bin = '') {
  if (decimalNumber === 0) {
    return bin;
  }

  bin = (decimalNumber % 2) + bin;
  return decToBin(Math.floor(decimalNumber / 2), bin);
}

console.log(decToBin(5436584564556455));
