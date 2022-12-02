function strinReverse(str) {
  if (str.length == 0) {
    return '';
  } else {
    return strinReverse(str.slice(1)) + str.charAt(0);
  }
}

function stringRev2(str) {
  let reversed = '';
  if (str.length == 0) {
    return '';
  } else {
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  }
  return reversed;
}

console.log(stringRev2('ndzalama mabasa'));
