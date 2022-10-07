function palindrome(word) {
  if (word.length === 0 || word.length === 1) {
    return true;
  } else if (word[0] === word[word.length - 1]) {
    return palindrome(word.slice(1, -1));
  }

  return false;
}

console.log(palindrome("racecar"));
