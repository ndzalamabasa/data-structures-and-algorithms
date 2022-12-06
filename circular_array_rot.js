function circularArrayRotation(a, k, queries) {
  const newArray = a.slice(-(k % a.length)).concat(a.slice(0, -(k % a.length)));

  const shiftedArray = queries.map((query) => newArray[query]);

  return shiftedArray;
}
