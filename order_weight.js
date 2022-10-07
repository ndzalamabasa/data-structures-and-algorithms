function orderWeight(str) {
  if (str.length <= 1) return str;
  const weightsArray = str.split(" ");
  const strWeightToNumbers = weightsArray.map((weight) => {
    return Number(weight);
  });
  const sortedWeights = strWeightToNumbers.sort((a, b) => {
    return b - a;
  });

  const arrayWeights = [];
  sortedWeights.forEach((weight) => {
    let weightSum = weight
      .toString()
      .split("")
      .map((digit) => {
        return Number(digit);
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    arrayWeights.push([weight, weightSum]);
  });

  let sortableWeights = arrayWeights.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0].toString().localeCompare(b[0].toString());
    }
    return a[1] - b[1];
  });

  return sortableWeights
    .map((weight) => {
      return weight[0];
    })
    .join(" ");
}
