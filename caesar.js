let ascii = "a".charCodeAt(0); // 97
let char = String.fromCharCode(ascii); // 'a'

// console.log("A".charCodeAt(0));

function shift(string, num) {
  const stringArray = string.split("");
  const output = [];

  for (let i = 0; i < stringArray.length; i++) {
    // 65 - 90 : 97 - 122 
    const letter = stringArray[i];

    if (/[A-Za-z]/.test(letter)) {
      const letterAscii = letter.charCodeAt();
      let shiftedAscii = letterAscii + num;

      if (num < 0) {
        if (shiftedAscii < 65 || (shiftedAscii < 65 && shiftedAscii < 97)) {
            shiftedAscii = shiftedAscii + 26;
          }
      }

      if (shiftedAscii > 122 || (shiftedAscii > 90 && shiftedAscii < 97)) {
        shiftedAscii = shiftedAscii - 26;
      }

      const shiftedLetter = String.fromCharCode(shiftedAscii);
      output.push(shiftedLetter);
    } else {
      output.push(letter);
    }
  }

  return output.join("");
}

// console.log(shift("Abc", 1)); //Bcd
// console.log(shift("Ab c", 1)); //a
// console.log(shift("bcd", 1)); //abc
// console.log(shift("bcd", 1)); //cde
console.log(shift("A", -27 )); //z
