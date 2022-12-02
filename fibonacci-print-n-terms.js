function nthFibonacci(term) {
  const fibSequence = [0, 1, 1];

  if (term === 1) {
    return [fibSequence[term - 1]];
  }
  if (term === 2) {
    return fibSequence.slice(0, term);
  }
  if (term === 3) {
    return fibSequence.slice(0, term);
  }
  let i = 2;

  while (i <= term - 2) {
    const currentNumber = fibSequence[i - 1] + fibSequence[i];
    fibSequence.push(currentNumber);
    i++;
  }
  
  return fibSequence;
}

// console.log(nthFibonacci(0)); //[]
// console.log(nthFibonacci(1)); //0
// console.log(nthFibonacci(2)); //[0, 1]
console.log(nthFibonacci(3)); //[0, 1, 1]

// console.log(nthFibonacci(4)); //2

//   console.log(nthFibonacci(10)); //34
