// todo: Given 2 strings, str1 and str2, write a function that returns true if str1 is an anagram of str2, and false otherwise. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. Characters have to be the same and same frequency.

const validAnagram = (str1, str2) => {
  return str1.split('').sort().join() === str2.split('').sort().join();
};

// console.log(validAnagram('cinema', 'iceman'));
// console.log(validAnagram('danger', 'garned'));

function anagram(s) {
  if (s.length % 2 !== 0) {
    return -1;
  }

  const midPoint = s.length / 2;
  const firstWord = s.slice(0, midPoint).split('');
  const secondWord = s.slice(midPoint).split('');

  firstWord.forEach((letter, index) => {
    if (secondWord.includes(letter)) {
      secondWord.splice(secondWord.indexOf(letter), 1);
    }
  });

  return secondWord.length;
}

console.log(anagram('xyyx'));
