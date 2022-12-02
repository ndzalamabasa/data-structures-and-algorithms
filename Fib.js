function fib(n) {
  if (n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}

//8
console.log(fib(8));
//50
//console.log(fib2(50))

//time efficient
function fib2(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n < 3) return 1;
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
}

//8
// console.log(fib2(8));

//50
console.log(fib2(50));
// const obj = {
//   a: 'hello',
//   2: 45,
// };

// console.log(obj[3]);
