function palindrome(word) {
  if (word.length === 0 || word.length === 1) {
    return true;
  } else if (word[0] === word[word.length - 1]) {
    return palindrome(word.slice(1, -1));
  }

  return false;
}
function palindrome2(word) {
  let reversed = '';
  if (word.length == 0) {
    return '';
  } else {
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
  }
  return reversed == word;
}

console.log(palindrome('racecar'));
