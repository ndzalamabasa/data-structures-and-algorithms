const library = {
  a: "w",
  b: "x",
  c: "y",
  d: "z",
  e: "a",
  f: "b",
  g: "c",
  h: "d",
  i: "e",
  j: "f",
  k: "g",
  l: "h",
  m: "i",
  n: "j",
  o: "k",
  p: "l",
  q: "m",
  r: "n",
  s: "o",
  t: "p",
  u: "q",
  v: "r",
  w: "s",
  x: "t",
  y: "u",
  z: "v",
  " ": "_",
};

/*
Problem Statement:
 decipher the text
 NB! ^ means the letter should be capital letter
*/

/*
1. loop through string
-> if Letter || space:
    -> check if char is uppercase:
      -> add "^"+library's equivalent to res
    -> if char is lowercase 
    -> add library's equivalent to res
else:
    add char
*/

const cipher = (str) => {
  let newString = "";
  for (const letter of str) {
    if (/[A-Za-z\s]/.test(letter)) {
      if (/[A-Z]/.test(letter)) {
        newString += "^" + library[letter.toLowerCase()];
      } else {
        newString += library[letter];
      }
    } else {
      newString += letter;
    }
  }

  return newString;
};
const decipher = (str) => {
  let deciphered = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter == "^") continue;
    if (/[a-z_]/.test(str[i])) {
      letter = Object.keys(library).find((key) => library[key] === str[i]);
    }
    if (str[i - 1] == "^") {
      deciphered += letter.toUpperCase();
    } else {
      deciphered += letter;
    }
  }

  return deciphered;
};

// console.log(cipher("Ndzalama Mabasa")); // => "^jzvwhwiw_^iwxwow"
// console.log(cipher("abc")); // => 'wxy,
// console.log(cipher("I am first")); // => "^e_wi_benop

// console.log(decipher("^jzvwhwiw_^iwxwow"));
// console.log(decipher("^e_wi_benop"));
// console.log(decipher("wxy"));
