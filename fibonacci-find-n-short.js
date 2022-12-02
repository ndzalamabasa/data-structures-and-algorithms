//Checking if a number is part of fibonacci sequence.
//so if the given number is part of fibonacci the function should return yes or no if not.
//++
//Also return which position of the sequence it sits on.
// 0,1,1,2,3,5,8
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...

function isFibonacci(number) {

  //Get sequence, build/increment from fib n,
  //comparing every n sequence if number is n sequence and if number smaller than the current fib n.

  const fibSequence = [0, 1, 1];

  let currentNumber = fibSequence[2];
  let i = 2;

  while (currentNumber <= number) {
    currentNumber = fibSequence[i - 1] + fibSequence[i];
    fibSequence.push(currentNumber);
    i++;
  }

  return fibSequence.includes(number);
}

