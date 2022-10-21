function longestSubstring(str) {
  const stringsArray = [];
  str = str.slice(1);
  let strLen = 0;
  let longestStr;

  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(i);
    let characters = str[i];

    for (let j = 0; j < substring.length; j++) {
      if (characters.includes(substring[j])) {
        continue;
      } else if (!characters.includes(substring[j]) && characters.length < 2) {
        characters += substring[j];
        continue;
      }

      stringsArray.push(substring.slice(0, j));
      break;
    }
  }

  stringsArray.forEach((subStr) => {
    if (subStr.length > strLen) {
      strLen = subStr.length;
      longestStr = subStr;
    }
  });

  return longestStr;
}

console.log(longestSubstring('2aabbacbaa'));
