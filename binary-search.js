// Given an array of numbers, write a function that returns the position of the number being searched or -1 if the number is not in the array

function binarySearch(array, searchValue, firstIndex, lastIndex) {
  if (firstIndex > lastIndex) {
    return -1;
  }

  let middleIndex = Math.floor((lastIndex + firstIndex) / 2);

  if (searchValue == array[middleIndex]) {
    return middleIndex;
  }

  if (searchValue > array[middleIndex]) {
    return binarySearch(array, searchValue, middleIndex + 1, lastIndex);
  }

  return binarySearch(array, searchValue, firstIndex, middleIndex - 1);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
console.log(binarySearch(numbers, 4, 0, numbers.length - 1));
