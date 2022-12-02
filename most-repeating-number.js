/* Question:

Also a coderbyte question.
Return most repeating number in array [5, 5, 2, 2, 1] if equals found output the 1st one. and -1 if no frequent numbers.
link: https://www.geeksforgeeks.org/find-first-repeating-element-array-integers/

/*
return most repeating number in array [5, 5, 2, 2, 1] if equals found output the 1st one. and -1 if no frequent numbers.
e.g array [5, 5, 2, 2, 1]
output: 5.

e.g array [2, 5, 5, 2, 1]
output: 2.

e.g array [2, 5, 1]
output: -1

object keeps how many times a number repeats.
object must also keep the first index of each number.
object must check if which number/numbers repeat most.
if there's is a tie in repeating numbers pick the number with lowest index.

*/

const mostRepeating = (arr) => {
  let repeatsFound = false;
  const counterObj = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    if (counterObj[currentNumber] === undefined) {
      counterObj[currentNumber] = { repeat: 1, firstIndex: i };
    } else {
      repeatsFound = true;
      counterObj[currentNumber].repeat++;
    }
  }

  if (repeatsFound === false) {
    return -1;
  } else {
    return arr[mostRepeatingIndex(counterObj, arr.length)];
  }

};

function mostRepeatingIndex(counterObj, arrLength) {
  let highestRepeatIndex = arrLength;
  let highestRepeat = -1;
  let currentIndex;

  for (const number in counterObj) {
    currentIndex = counterObj[number].firstIndex;

    if (
      counterObj[number].repeat >= highestRepeat &&
      highestRepeatIndex > currentIndex
    ) {
      highestRepeat = counterObj[number].repeat;
      highestRepeatIndex = currentIndex;
    }
  }
  return highestRepeatIndex;
}

console.log(mostRepeating([ 2,5, 5, 2, 1])); // 2
console.log(mostRepeating([10, 5, 3, 4, 3, 5, 6])); // 5
console.log(mostRepeating([6, 10, 5, 4, 9, 120, 4, 6, 10])); // 6
console.log(mostRepeating([2, 5, 1])); // -1
