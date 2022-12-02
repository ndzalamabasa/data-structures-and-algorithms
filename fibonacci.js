// string formatter function

function fib(str) {
  let newString = '';
  for (const letter of str) {
    if (/[A-Za-z\s]/.test(letter)) {
      if (/[A-Z]/.test(letter)) {
        newString += '^' + library[letter.toLowerCase()];
      } else {
        newString += library[letter];
      }
    } else {
      newString += letter;
    }
  }

  return newString;
}
