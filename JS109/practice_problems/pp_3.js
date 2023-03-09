/* eslint-disable max-len */
/*
Problem: Write a function that takes a string and returns
a string with every 4th letter capitalized in every second word
of the string.

Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

Data Structure: String -> Array -> String

Algorithm:
  Convert the string to an array of words
  Iterate through the words
  If word index is odd
    Iterate through word
      If char index is multiple of 4
        Make char uppercase
  Converte array back to string
  Return string

Code:
*/
function toWeirdCase(string) {
  let stringArr = string.split(' ');
  stringArr = stringArr.map((word, idx) => {
    if (idx % 2 !== 0) {
      return word.split('').map((char, idx) => {
        if ((idx + 1) % 4 === 0) {
          return char.toUpperCase();
        }
        return char;
      }).join('');
    }
    return word;
  }).join(' ');
  return stringArr;
}


console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');