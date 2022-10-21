function printAllPossibleOrderedPairs(items) {
  const pairs = [];
  items.forEach((firstItem) => {
    items.forEach((secondItem, index, array) => {
      if (array.indexOf(firstItem) !== index) {
        pairs.push({ firstItem, secondItem });
      }
    });
  });

  return pairs;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(printAllPossibleOrderedPairs(numbers)[5].secondItem);
