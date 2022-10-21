function binaryToDec(bin, dec = 0) {
  if (bin.length === 0) return dec;

  let number = Number(bin[0]);
  dec += number * Math.pow(2, bin.length - 1);

  return binaryToDec(bin.slice(1), dec);
}

console.log(
  binaryToDec('10011010100001000101101111011110000110000001010100111')
);
