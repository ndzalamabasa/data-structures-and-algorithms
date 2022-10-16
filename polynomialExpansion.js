function MathChallenge(str) {
  // extract first group of values
  const strArray = str.split(')(');
  let firstGroup = strArray[0].slice(1);
  let secondGroup = strArray[1].slice(0, -1);
  const firstGroupExponent = findIndex('^', firstGroup);
  const secondGroupExponent = findIndex('^', secondGroup);
  const addition = '+';
  const subtraction = '-';

  if (
    firstGroup.includes(addition) &&
    firstGroup[firstGroupExponent + 1] !== addition
  ) {
    firstGroup = firstGroup.split(addition);
  }
  if (
    firstGroup.includes(subtraction) &&
    firstGroup[firstGroupExponent + 1] !== subtraction
  ) {
    firstGroup = firstGroup.split(subtraction);
  }

  if (
    secondGroup.includes(addition) &&
    secondGroup[secondGroupExponent + 1] !== addition
  ) {
    secondGroup = secondGroup.split(addition);
  }
  if (
    secondGroup.includes(subtraction) &&
    secondGroup[secondGroupExponent + 1] !== subtraction
  ) {
    secondGroup = secondGroup.split(subtraction);
  }

  return secondGroup;
}

function findIndex(letter, string) {
  return string.indexOf(letter);
}
