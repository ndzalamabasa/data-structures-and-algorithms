//  todo: Given an array of sorted numbers and a target number, find the first and last positions of the of the target number in the array and return the positions as an array (i.e first number being the first position and second being the last position) or return [-1,-1] if not found;

const firstLastPosition = (arr, target) => {
  const positions = [-1, -1];

  positions[0] = arr.indexOf(target);
  positions[1] = arr.lastIndexOf(target);

  return positions;
};

console.log(firstLastPosition([2, 2, 4, 5, 5, 5, 5, 5, 7, 9], 2));
