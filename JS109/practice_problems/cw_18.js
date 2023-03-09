/*
Algorithm:
  Convert the string to an array of words
  Iterate through the words
    convert each word to an array of chars
    Iterate through the chars
      If index of char is even
        to uppercase
      If index is odd
        to lowercase

*/


function toWeirdCase(string) {
  let words = string.split(' ');

  return words.map(word => {
    return word.split('').map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    }).join('');
  }).join(' ');
}

toWeirdCase('This is a test');