// Complete the caesarCipher function in the editor below.
// caesarCipher has the following parameter(s):
// string s: cleartext
// int k: the alphabet rotation factor

function caesarCipher(s, k) {
  // Write your code here
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + k) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + k) % 26) + 97;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

console.log(
  caesarCipher(
    '!m-zB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U',
    62
  )
); //!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E
console.log(4 / 26);
