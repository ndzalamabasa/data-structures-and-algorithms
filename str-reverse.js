function strinReverse(str) {
  if (str.length == 0) {
    return "";
  } else {
    return strinReverse(str.slice(1)) + str.charAt(0);
  }
}

console.log(strinReverse("ndzalama mabasa"));
